import React, {useState} from 'react'
import { toast } from 'react-toastify'
import { commandeAdd } from '../api/commandeApi'
import { ligneCommandeAdd } from '../api/ligneCommandeApi'
import { userAdd, userGet } from '../api/userApi'
import PaiementForm from '../component/paiement/paiementForm'
import Recapitulatif from '../component/paiement/recapitulatif'
import { addCommande, getCommande } from '../services/commande'
import { cancel, getCard } from '../services/panier'
import { getUser } from '../services/user'

export default function Paiement(props) {
    const [cartebancaire, setcartebancaire] = useState({nbCarte:'',nom:'',mois:'',annee:'',cvv:''})

    const handleChange = (event)=>{
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setcartebancaire({...cartebancaire,[name]:value})
    }

    const handleCancel = ()=>{
        if(window.confirm("Etes vous sur de vouloir annuler la commande en cours ?")){
            cancel()
            props.history.push("/")
        }
    }

    const handlePaiement = async ()=>{
        if(cartebancaire.nbCarte == '' || cartebancaire.nom == '' || cartebancaire.mois == '' || cartebancaire.annee == '' || cartebancaire.cvv == ''){
            toast.warn("tout les champs sont requis !")
            return
        }
        try{
            const userLocal = getUser()
            const userStrapiResp = await userGet(userLocal.email)
            let userStrapi = {}
            if(userStrapiResp.length == 0){
                const userAdding = await userAdd(userLocal)
                userStrapi = userAdding.data.user
            }else{
                userStrapi = userStrapiResp[0]
            }
            const commande = getCommande()
            commande.user = userStrapi
            const commandeStrapi = await commandeAdd(commande)
            const produits = getCard()
            produits.map(async (article,index)=>{
                commande.id = commandeStrapi.id
                addCommande(commande)
                article.commande = commandeStrapi
                await ligneCommandeAdd(article)
                props.history.push("/confirmation")
            })
        }catch(e){
            toast.error("Une erreur est survenue :/")
        }
        
        
    }

    return (
        <div>
            <h2 className="text-center">Récapitulatif de votre panier d'achat</h2>
            <Recapitulatif />
            <PaiementForm change={handleChange}/>
            <div className="container mb-2">
                <div className="row align-items-start">
                    <div className="col"></div>
                    <div className="col">
                        <div className="d-flex justify-content-around align-items-center mt-4">
                            <button onClick={handleCancel} className=" btn btn-danger">Annuler la commande</button>
                            <button onClick={handlePaiement} className=" btn btn-primary">Payer la commande</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
