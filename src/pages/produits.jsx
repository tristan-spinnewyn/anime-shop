import React, {useEffect,useState} from 'react'
import { toast } from 'react-toastify'
import { getProducts } from '../api/product'
import Cards from '../component/produits/cards'

export default function Produits(props) {
    const [produits, setproduits] = useState([])

    const strUcFirst = (text)=>{
        return text.charAt(0).toUpperCase()+text.substr(1);
    }

    useEffect( async () => {
        let query = `?category.libcategorie=${props.category}`
        console.log(props.style)
        if(props.style != undefined &&props.style != '' ){
            const styleUrl = strUcFirst(props.style)
            query += `&style.libstyle=${styleUrl}`
        }

        const result = await getProducts(query)
        if(result.status == 200){
            setproduits(result.data)
        }else{
            toast.error("Une erreur c'est produite !")
        }
    }, [props.style])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {produits.map(
                (produit,index)=> {
                    let current_datetime = new Date(produit.published_at)
                    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
                    return <Cards key={index} produit={produit} formatted_date={formatted_date} className="m-4"/>
                }
            )}
        </div>
    )
}
