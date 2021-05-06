import React, {useContext} from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { CardContext } from '../../App'
import Logo from '../../images/logo.jpeg'
import MenuLi from './menuLi'
import MenuLiDropdown from './menuLiDropdown'

export default function Header(props) {
    const menu = [
        {nom: "Accueil", url:"/"},
        {nom : "Manga", url:"#", sousMenu:[
            {nom:"Tous voir",url:"/manga"},
            {nom:"Shojo",url:"/manga/shojo"},
            {nom:"Shonen",url:"/manga/shonen"},
            {nom:"Seinen",url:"/manga/seinen"}
        ]},
        {nom : "Film", url : "#",sousMenu:[
            {nom:"Tous voir",url:"/film"},
            {nom:"Shojo",url:"/film/shojo"},
            {nom:"Shonen",url:"/film/shonen"},
            {nom:"Seinen",url:"/film/seinen"}
        ] },
		{nom : "Série TV", url : "#",sousMenu:[
            {nom:"Tous voir",url:"/serie"},
            {nom:"Shojo",url:"/serie/shojo"},
            {nom:"Shonen",url:"/serie/shonen"},
            {nom:"Seinen",url:"/serie/seinen"}
        ]},
		{nom: "A propos", url:"/about"},
		{nom: "Contact",url:"/contact"}
    ]

    const context = useContext(CardContext)
    console.log(context.nbArticle)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} alt="logo" height="50"/></a>
                <button className="navbar-toggler" data-bs-toggle="collapse" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {menu.map((item,index)=>{
                            if(item.url== "#" ){
                                return <MenuLiDropdown key={index} nom={item.nom} sousMenu={item.sousMenu} />
                            }else{
                                return <MenuLi key={index} nom={item.nom} url={item.url} />
                            }
                        })}
                    </ul>
                </div>
                <div>
                    <ul className="navbar-nav space-between">
                        <li className="m-2"><FontAwesome name="user" size="2x"/></li>
                        <li className="m-2"><Link to="/panier" className="text-decoration-none text-dark"><FontAwesome name="shopping-cart" size="2x"/>({context.nbArticle})</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
