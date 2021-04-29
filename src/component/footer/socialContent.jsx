import React from 'react'
import SocialButton from './socialButton'

export default function SocialContent() {
    const social = [
        {font:"facebook",url:"#"},
        {font:"instagram",url:"#"},
        {font:"twitter",url:"#"},
        {font:"youtube",url:"#"}
    ]
    return (
        <section className="mb-4">
            {social.map((item,index)=> <SocialButton key={index} font={item.font} url={item.url} />)}
        </section>
    )
}
