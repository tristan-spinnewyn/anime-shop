import React, { useEffect, useState,useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getLivraison } from '../api/livraisonApi'
import { CardContext } from '../App'
import { addCommande } from '../services/commande'
import { getCard, nbArticles, updateQte } from '../services/panier'

export default function Panier(props) {
    const [panier, setpanier] = useState([])

    const [montant,setmontant] = useState(0)

    const [change,setchange] = useState(0)

    const context = useContext(CardContext)

    const [livraison, setlivraison] = useState(2)

    useEffect(() => {
        const cards = getCard()
        if (cards) {
            setpanier(cards)
            let montantTot = 0
            cards.map((article,index)=>{
                montantTot = montantTot + (article.quantite * article.produit.prix)
            })
            if(livraison == 1){
                montantTot = montantTot + 5.90
            }
            setmontant(montantTot)
        }
    }, [change,livraison])

    const changeQte = (quantite,index)=> {
        updateQte(index,quantite)
        setchange(change + 1)
        context.setNbArticle(nbArticles())
    }

    const handleChangeLivraison =(event)=>{
        setlivraison(event.target.value)
    }

    const validate = async ()=>{
        const livraisonObject = await getLivraison(livraison)
        const commande = {
            montant: montant,
            reduction:0,
            livraison: livraisonObject,
            user:null,
            id:null
        }

        addCommande(commande)

        props.history.push('/infos');
        
    }

    return (
        <div>
            <h2 className="text-center">Panier</h2>
            <p className="text-center">Bonjour, vous avez {nbArticles()} produit dans votre panier !</p>
            <div className="row">
                {panier.map((article, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img height="100px" src={article.produit.urlImg} alt="image article" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{article.produit.nameProduit}</h5>
                                        <p className="card-text">prix unitaire TTC: {article.produit.prix} €</p>
                                        <p className="card-text">prix total: {article.produit.prix * article.quantite} €(dont TVA: {article.produit.tva.taux}%)</p>
                                        <p className="card-text">Quantité: <button onClick={()=>{changeQte(article.quantite-1,index)}} className="btn btn-primary"> - </button> {article.quantite} <button onClick={()=>{changeQte(article.quantite+1,index)}} className="btn btn-primary"> + </button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="d-flex align-items-end flex-column">
                <div className="row align-items-start">
                    <div className="col">
                        <p>Mode de livraison :</p>
                    </div>
                    <div className="form-check col">
                        <input className="form-check-input" type="radio" name="livraison" id="point_relais" onChange={handleChangeLivraison} checked="checked" value="2"/>
                        <label className="form-check-label" htmlFor="point_relais">
                            Point relais (gratuit)
                        </label>
                    </div>
                </div>
                <div className="row">
                <div className="form-check col">
                        <input className="form-check-input" type="radio" name="livraison" id="chronopost" value="1" onChange={handleChangeLivraison} />
                        <label className="form-check-label" htmlFor="chronopost">
                            Chronopost (5.90€)
                        </label>
                    </div>
                </div>
                <h3 className="align-right">Montant total de la commande : {montant} €</h3>
            </div>
            <div  className="d-flex justify-content-around">
                <Link to="/"><button className="btn btn-primary">Poursuivre mes achats</button></Link>
                <button onClick={validate} className="btn btn-primary">Valider ma commande</button>
            </div>
        </div>
    )
}
