import React from 'react'
import { Link } from 'react-router-dom'

export default function Copyright() {
    return (
        <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                © 2020 Copyright:<Link className="text-white" to="/">Anime shop</Link>
        </div>
    )
}
