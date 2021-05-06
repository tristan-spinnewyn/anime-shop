import axios from 'axios'
import {BASE_URL} from './config'

export async function ligneCommandeAdd(ligne){
    const url = `${BASE_URL}/lignecommandes`
    const result = await axios.post(url,ligne)

    return result;
}