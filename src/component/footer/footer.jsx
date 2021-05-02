import React from 'react'
import Copyright from './copyright'
import MenuFooter from './menuFooter'
import Newsletter from './newsletter'
import SocialContent from './socialContent'

export default function Footer(props) {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <SocialContent/>
                <Newsletter/>
                <MenuFooter/>
            </div>
            <Copyright/>
        </footer>
    )
}
