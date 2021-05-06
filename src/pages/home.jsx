import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LastProduct from '../component/produits/lastProduct';
import ShortPresent from '../component/shortpresent';

export default function Home() {
    return (
        <div>
            <div>
                <Carousel autoPlay={true} interval="5000" infiniteLoop={true} showThumbs={false}>
                    <div>
                        <img src="https://images7.alphacoders.com/105/thumb-1920-1054068.png" />
                        <p className="legend">Solo leveling</p>
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/originals/9f/77/02/9f77024d7233d8d68f344cad23f64408.jpg" />
                        <p className="legend">One piece</p>
                    </div>
                    <div>
                        <img src="https://wallpaperaccess.com/full/10655.jpg" />
                        <p className="legend">Bleach</p>
                    </div>
                </Carousel>
            </div>
            <div>
                <h3 className="text-center">Nos derniers produits</h3>
                <LastProduct/>
            </div>
            <div>
                <h3 className="text-center">Présentation de l'entreprise</h3>
                <ShortPresent/>
            </div>
        </div>
    )
}
