import axios from 'axios'
import {BASE_URL} from './config'


export async function newsletterRegister(email){
    const url = `${BASE_URL}/newsletters`
    const result = await axios.post(url,email)

    return result;
}