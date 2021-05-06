import React,{useState,useEffect} from 'react'
import {getLastProducts} from '../../api/product'
import Cards from './cards'

export default function LastProduct() {
    const [produits, setproduit] = useState([])
    useEffect(async () => {
        const produits = await getLastProducts()
        setproduit(produits)
        console.log(produits)
    }, [])
    return (
        <div className="d-flex row row-cols-1 row-cols-md-3 g-4 justify-content-around">
            {produits.map((produit,index)=>{
                let current_datetime = new Date(produit.published_at)
                let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
                return <Cards key={index} produit={produit} formatted_date={formatted_date}/>
            })}
        </div>
    )
}
