import {createClient} from 'redis'
import handleList from './handleList'
import {decode} from 'jsonwebtoken';
import { createHash } from 'crypto';

const blocklist = createClient();

(()=> {
    blocklist.connect().then(()=> {
        console.log("Client blocklist conectado")
    },(err)=> {
        console.log(err, "\nerro ao conectar com client de blocklist")
    })
})()

const handleBlocklist =  handleList(blocklist)

// function createTokenHash(token: string) {
//     return createHash('sha256').update(token).digest('hex')
// }

export default {
    async add(token: string, expiration: number|string) {
        return (await handleBlocklist).add("blocklist-acces-token:"+token, '', expiration)
    },

    async containsToken(token: string) {
        return (await handleBlocklist).containsKey(token)
    }
}