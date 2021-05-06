import React, { useState } from 'react'
import { getCard } from '../../services/panier'

export default function Recapitulatif() {
    const [produits, setproduits] = useState(getCard())

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Produit</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Quantité</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.map((article, index) => {
                        return (
                            <tr>
                                <td>
                                    <div className="card" key={index}>
                                        <div>
                                            <div>
                                                <div className="card-body d-flex flex-row justify-content-between">
                                                    <img height="100px" src={article.produit.urlImg} alt="image article" />
                                                    <h5 className="card-title">{article.produit.nameProduit}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {article.prix}€
                                </td>
                                <td>
                                    {article.quantite}
                                </td>
                                <td>
                                    {article.prix * article.quantite}€
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
