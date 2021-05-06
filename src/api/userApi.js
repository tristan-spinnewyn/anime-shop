import axios from 'axios'
import {BASE_URL} from './config'


export async function userAdd(user){
    const url = `${BASE_URL}/auth/local/register`
    const result = await axios.post(url,user)

    return result;
}

export async function userGet(email){
    const url = `${BASE_URL}/users?email=${email}`

    const result = await axios.get(url)

    return result.data;
}