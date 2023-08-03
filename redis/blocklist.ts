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

// function createTokenHash(token) {
//     return createHash('sha256').update(token).digest('hex')
// }

// export default {
//     async add(token: string) {
//         const expirationDate = decode(token)
//         const tokenHash = createTokenHash(token)
//     }
// }