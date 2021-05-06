import axios from "axios"
import { BASE_URL } from "./config"

export async function getLivraison(id){
    const response = await axios.get(`${BASE_URL}/livraisons/${id}`)

    return response.data
}