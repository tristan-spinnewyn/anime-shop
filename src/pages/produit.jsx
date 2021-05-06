import React, {useEffect,useState, useContext} from 'react'
import { getProduct } from '../api/product'
import { toast } from 'react-toastify'
import { addCard, nbArticles } from '../services/panier'
import { CardContext } from '../App'

export default function Produit(props) {
    const [produit, setproduit] = useState({
        category:{id:0,libcategorie:''},
        created_at: "",
        id:0,
        nameProduit:"test",
        prix:"666",
        published_at:"",
        quantite: 0,
        style:{id:0,libstyle:''},
        tva:{id:0,taux:66},
        updated_at:"",
        urlImg:"",
        description:'',
    })

    const context = useContext(CardContext)

    const [selectValue, setselectvalue] = useState({format:'none',quantite:1})

    useEffect( async () => {
        const result = await getProduct(props.id)
        if(result.status == 200){
            setproduit(result.data)
        }else{
            toast.error("Une erreur c'est produite !")
        }
    }, [])

    const handleChange = (event)=>{
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        setselectvalue({...selectValue, [name] : value})
    }

    const toogleFormat = (category)=>{
        if(category.libcategorie == "Film" || category.libcategorie =="Série TV"){
            return (<div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="format">Format</label>
                        </div>
                        <select value={selectValue.format} onChange={handleChange} className="custom-select" id="format" name="format">
                            <option value="none">Choose...</option>
                            <option value="dvd">DVD</option>
                            <option value="blue-ray">Blue-ray</option>
                        </select>
                    </div>)
        }
    }

    const printOptionQte = (quantite) =>{
        const row = [];
        for (var i = 0; i < 10 && i < quantite; i++) {
            row.push(<option key={i} value={i+1}>{i+1}</option>);
          }
          return row;
    }

    const addPanier = ()=>{
        if(produit.quantite == 0){
            toast.warn("Le produit n'est plus en stock !")
            return
        }
        const article = {
            commande :null,
            produit: produit,
            prix: produit.prix*1,
            quantite: selectValue.quantite*1,
            tva: produit.tva.taux,
            formatProduit: selectValue.format,
        }
        addCard(article)
        context.setNbArticle(nbArticles())

        toast.success("Votre produit a été ajouté au panier !")
    }

    return (
        <div className="row">
            <h2 className="text-center">{produit.nameProduit}</h2>
            <div className="col-sm-6 col-md-6 justify-content-center d-flex flex-row-reverse p-4">
                <img height="400px" src={produit.urlImg}/>
            </div>
            <div className="col-sm-6 col-md-6">
                <h4>Prix: {produit.prix} € (dont TVA:{produit.tva.taux} %)</h4>
                <p>Quantité restante : {produit.quantite}</p>
                {toogleFormat(produit.category)}
                <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="format">Quantité</label>
                        </div>
                        <select className="custom-select" id="quantite" name="quantite" onChange={handleChange} value={selectValue.value}>
                            {printOptionQte(produit.quantite)}
                        </select>
                    </div>
                <button className="btn btn-primary btn-lg btn-block" onClick={addPanier}>Ajouter au panier</button>
                <p>Description: </p>
                <p>{produit.description}</p>
            </div>
        </div>
    )
}
