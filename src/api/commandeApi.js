import axios from 'axios'
import {BASE_URL} from './config'

export async function commandeAdd(cmd){
    const url = `${BASE_URL}/commandes`
    const result = await axios.post(url,cmd)

    return result.data;
}