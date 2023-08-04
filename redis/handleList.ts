import redis, { RedisClientType } from 'redis'

export default async(lista: any)=> {
    return {
        async add(key: string, value: string, expirationDate: number|string){
            await lista.set(key, value, {EX: expirationDate})
        },

        async containsKey(key: string) {
            const result = await lista.exists(key)
            return result === 1 
        },

        async searchValue(key: string) {
            return lista.get(key)
        },

        async delete(key: string) {
            await lista.del(key)
        }
    }
}   