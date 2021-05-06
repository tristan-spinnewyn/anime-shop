import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Cards({produit, formatted_date}) {
    return (
        <div className="col" style={{width: '18rem', minHeight:'35rem',maxHeight:'38rem'}}>
            <div className="card" style={{height:'100%'}}>
                <div style={{height:'100%'}} className='justify-content-center align-self-center'>
                    <img src={produit.urlImg}  className="card-img-top" alt="image de l'article"/>
                </div>
                <div className="card-body">
                    <h6 className="card-title">{produit.nameProduit}</h6>
                    <p className="card-text">Prix :{produit.prix}€</p>
                    <p><Link to={`/produit/${produit.id}`}>Voir l'article</Link></p>
                    <div className="card-footer">
                        <small className="text-muted">Mise en ligne le {formatted_date}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
