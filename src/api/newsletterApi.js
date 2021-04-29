import axios from 'axios'

const BASE_URL = 'http://localhost:3004'

export async function newsletterRegister(email){
    const url = `${BASE_URL}/newsletter`
    const result = await axios.post(url,email)

    return result;
}