import axios from 'axios'

const BASE_URL = 'http://localhost:1337'

export async function newsletterRegister(email){
    const url = `${BASE_URL}/newsletters`
    const result = await axios.post(url,email)

    return result;
}