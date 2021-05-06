import React, { useState } from 'react'
import { getCommande } from '../../services/commande'

export default function PaiementForm({change}) {
    const [commande, setcommande] = useState(getCommande())
    return (
        <div className="container m-4">
                <div className="row align-items-start">
                    <div className="col">
                        <h3 className="text-center">Méthode de paiement</h3>
                        <div className="mt-3 mr-2">
                            <div className="row g-2">
                                <div className="col-md-6">
                                    <div className="inputbox"> <small>Numéro de carte</small> <input type="text" className="form-control" name="nbCarte" onChange={change} /> </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inputbox"> <small>Nom sur la carte</small> <input type="text" className="form-control" name="nom" onChange={change} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 mr-2">
                            <div className="row g-2">
                                <div className="col-md-6">
                                    <div className="row g-2">
                                        <div className="col-md-6">
                                            <div className="inputbox"> <small>Mois d'expiration</small> <input type="text" className="form-control" name="mois" onChange={change} /> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputbox"> <small>Année d'expiration</small> <input type="text" className="form-control" name="annee" onChange={change} /> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inputbox"> <small>CVV</small> <input type="text" className="form-control" name="cvv" onChange={change} /> </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column">
                            <h3 className="d-flex flex-row-reverse">Mode de livraison : {commande.livraison.liblivraison}</h3>
                            <h3 className="d-flex flex-row-reverse">Montant total : {commande.montant}€</h3>
                        </div>
                    </div>
                </div>
            </div>
    )
}
