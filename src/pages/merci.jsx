import React, {useState, useEffect, useContext} from 'react'
import Recapitulatif from '../component/paiement/recapitulatif'
import { getUser, removeUser} from '../services/user'
import {getCommande, removeCommande} from '../services/commande'
import { cancel,nbArticles } from '../services/panier'
import { CardContext } from '../App'

export default function Merci() {
    const [user, setuser] = useState({})
    const [commande, setcommande] = useState({livraison:{liblivraison:''}})

    const context = useContext(CardContext)
    useEffect(async () => {
        setuser(await getUser())
        setcommande(await getCommande())
        console.log(commande)
        cancel()
        context.setNbArticle(nbArticles())
    }, [])
    return (
        <div>
            <h2 className="text-center">Merci {user.prenom} pour votre achat!</h2>
            <h3>La référence de votre commande est {commande.id}</h3>
            <h3>Un email de confirmation vous a été envoyée sur votre messagerie.</h3>
            <h3>A bientot dans notre boutique !</h3>
            <Recapitulatif />
            <div className="container m-4">
                <div className="row align-items-start">
                    <div className="col"></div>
                    <div className="col">
                        <div className="d-flex flex-column">
                            <h3 className="d-flex flex-row-reverse">Mode de livraison : {commande.livraison.liblivraison}</h3>
                            <h3 className="d-flex flex-row-reverse">Montant total : {commande.montant}€</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row-reverse m-4">
                <button className="btn btn-primary">Retour a la page d'accueil</button>
            </div>
            
        </div>
    )
}
