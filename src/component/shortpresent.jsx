import React from 'react'
import AboutImg from '../images/about.jpeg'

export default function ShortPresent() {
    return (
        <div className="container mb-4">
            <div className="row align-items-start">
                <div className="col">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae fugit,
                    qui fuga veniam tenetur hic, neque ipsam maiores corrupti similique, asperiores est minus cupiditate! Delectus maiores similique possimus nam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis labore repellendus, iusto laudantium aperiam, inventore amet quae beatae, 
                    magni praesentium earum officiis. Ipsum repudiandae tenetur doloribus corporis a nihil laboriosam?
                </div>
                <div className="col">
                    <img height="200px" src={AboutImg}/>
                </div>
            </div>
        </div>
    )
}
