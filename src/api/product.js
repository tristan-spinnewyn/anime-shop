import axios from "axios"
import { BASE_URL } from "./config"


export async function getProducts(query){
    const response =  await axios.get(`${BASE_URL}/produits${query}`)

    return response
}

export async function getProduct(id){
    const response = await axios.get(`${BASE_URL}/produits/${id}`)

    return response
}

export async function getLastProducts(query){
    const response =  await axios.get(`${BASE_URL}/produits?_sort=created_at:DESC&_limit=3`)
    console.log(response.data)
    return response.data
}