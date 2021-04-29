import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuLi(props) {
    return (
        <li className="nav-item">
            <Link className="nav-link" aria-current="page" to={props.url}>{props.nom}</Link>
        </li>
    )
}
