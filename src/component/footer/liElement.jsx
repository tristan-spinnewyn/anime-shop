import React from 'react'
import { Link } from 'react-router-dom'

export default function LiElement(props) {
    return (
        <li>
            <Link className="text-decoration-none text-light" to={props.url} className="text-white">{props.nom}</Link>
        </li>
    )
}
