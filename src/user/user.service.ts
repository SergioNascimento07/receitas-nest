import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prismaClient } from 'src/database/prismaClient';
import {scryptSync, timingSafeEqual, randomBytes} from "crypto"
import {sign} from 'jsonwebtoken'
import moment from 'moment';
import allowlist from 'redis/allowlist';
import blocklist from 'redis/blocklist';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const passwordHash = scryptSync(createUserDto.password, process.env.CRYPTO_SAL, 64).toString('hex')

    const newUser = await prismaClient.users.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        date_of_birth: createUserDto.date_of_birth,
        password: passwordHash,
        role: 'USER'
      }
    })
    return {object: newUser.email, message: "Usuário criado com sucesso"}
  }

  async findAll() {
    const users = await prismaClient.users.findMany()
    return {object: users, message: "Usuários encontrados com sucesso"}
  }

  async findOne(email: string) {
    const user = await prismaClient.users.findUnique({
      where: {
        email: email
      }
    })
    if (user === null) return {object: null, message: "O usuário não existe"}
    return {object: user, message: "Usuário encontrado com sucesso"}
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await prismaClient.users.update({
      where: {
          id: id
      },
      data: {
          name: updateUserDto?.name,
          email: updateUserDto?.email,
          date_of_birth: updateUserDto?.date_of_birth,
          password: updateUserDto?.password
      }
  })
  return {object: updatedUser, message: "Usuário atualizado com sucesso"}
  }

  async remove(id: string) {
    try {
      const usuarioRemovido = await prismaClient.users.delete({
        where: {
          id: id
        }
      });
      return {object: usuarioRemovido, message: "Usuário removido com sucesso"}
    } catch (err) {
      if(err.meta.cause === "Record to delete does not exist.") {
        return {object: null, message: "Usuário não encontrado"}
      }
      return {object: null, message: err.meta.cause}
    }
  }

  async login(email: string, password: string): Promise<any> {

    const user = await prismaClient.users.findFirst({
      where: {
        email: email
      }
    })
    if(user) {
      const passwordHash = Buffer.from(user.password, 'hex')
      const insertedPasswordHash = scryptSync(password, process.env.CRYPTO_SAL, 64)
      const validate = timingSafeEqual(insertedPasswordHash, passwordHash)
      if (validate) {
        const refreshToken = await this.createOpaqueToken(user)
        const accessToken = sign({
          id: user.id
        }, process.env.KEY_TOKEN, {expiresIn: "15m"})
        return {object: user, accessToken: accessToken, refreshToken: refreshToken, message: "Usuário autenticado"}
      } else {
        return {object: null, token: null, message: "Usuário ou senha incorretos"}
      }
    }
    return {object: null, token: null, message: "Usuário ou senha incorretos"}
  }

  private async createOpaqueToken(user: any) {
    const opaqueToken = randomBytes(24).toString('hex');
    //data que o token vai expirar
    // const expirationDate = moment().add(5, 'd').unix();
    (await allowlist).add("refresh-token:"+opaqueToken, user.id, 1000000)
    return opaqueToken
  }

  // async logout(refreshToken: string, accessToken: string) {
  //   const existsRefreshToken = (await allowlist).containsKey(refreshToken)
  //   if (existsRefreshToken) {
  //     (await allowlist).delete(refreshToken)
  //     blocklist.add(accessToken, "15m")
  //     return {object: refreshToken, message: "O logout foi realizado com sucesso, e esse refresh token foi inválidado"}
  //   }
  //   return {object: null, message: "Token já inválido"}
  // }
}