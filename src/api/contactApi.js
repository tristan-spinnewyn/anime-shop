import axios from 'axios'
import {BASE_URL} from './config'

export async function contactRegister(data){
    const url = `${BASE_URL}/contacts`
    const dataStrapi = {
        fullname:data.fullname,
        email: data.email,
        subject: data.subject,
        message:data.message
    }
    console.log(dataStrapi)
    const result = await axios.post(url,dataStrapi)

    return result;
}