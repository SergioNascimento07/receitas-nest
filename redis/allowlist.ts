import {createClient} from 'redis'
import handleList from './handleList'

const allowlist = createClient();

(()=> {
    allowlist.connect().then(()=> {
        console.log("Client allowlist conectado")
    },(err)=> {
        console.log(err, "\nerro ao conectar com client allowlist")
    })
})()

export default handleList(allowlist)