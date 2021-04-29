import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

export default function SocialButton(props) {
    return (
        <Link className="btn btn-outline-light btn-floating m-1" to={props.url} role="button"><FontAwesome name={props.font}/></Link>
    )
}
