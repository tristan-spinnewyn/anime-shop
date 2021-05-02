import React from 'react'
import { Link } from 'react-router-dom'
import LiElement from './liElement'

export default function ElementMenu(props) {
    return (
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <Link className="text-decoration-none text-light" to={props.url}><h5 className="text-uppercase">{props.title}</h5></Link>
            <ul className="list-unstyled mb-0">
                {props.sousMenu ? props.sousMenu.map((item,index)=><LiElement key={index} url={item.url} nom={item.nom} />) : ''}
            </ul>
        </div>
    )
}
