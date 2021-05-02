import React from 'react'
import { Link } from 'react-router-dom'
import ElementMenu from './elementMenu'

export default function MenuFooter() {
    const menu = [
        {
            nom: "Manga", url: "manga", sousMenu: [
                { nom: "Shojo", url: "/shojo" },
                { nom: "Shonen", url: "/shonen" },
                { nom: "Seinen", url: "/seinen" }
            ]
        },
        {
            nom: "Film", url: "/film", sousMenu: [
                { nom: "Shojo", url: "/shojo" },
                { nom: "Shonen", url: "/shonen" },
                { nom: "Seinen", url: "/seinen" }
            ]
        },
        {
            nom: "Série TV", url: "/serie", sousMenu: [
                { nom: "Shojo", url: "/shojo" },
                { nom: "Shonen", url: "/shonen" },
                { nom: "Seinen", url: "/seinen" }
            ]
        },
    ]

    return (
        <section className="">
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <Link className="text-decoration-none text-light"><h5 className="text-uppercase">Accueil</h5></Link>
                    <Link className="text-decoration-none text-light"><h5 className="text-uppercase">Contact</h5></Link>
                    <Link className="text-decoration-none text-light"><h5 className="text-uppercase">A propos</h5></Link >
                </div>
                {menu.map((item,index)=><ElementMenu key={index} url={item.url} title={item.nom} sousMenu={item.sousMenu}/>)}
                
            </div>
        </section>
    )
}
