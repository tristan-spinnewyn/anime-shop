import React from 'react'
import AboutImg from '../images/about.jpeg'


export default function About() {
    return (
        <div class="row">
            <h2 className="text-center">A propos</h2>
            <div className="col-sm-6 col-md-6 d-flex flex-row-reverse justify-content-center p-4">
                <img height="400px" src={AboutImg}/>
            </div>
            <div className="col-sm-6 col-md-6 justify-content-center align-self-center"><p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum, cum repellat ratione vero veritatis
             eligendi fugiat, sapiente nobis, excepturi saepe voluptas quisquam! Pariatur id consequatur suscipit repellat. Optio, illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
             Autem quos praesentium esse suscipit harum officia dolore quia numquam accusamus. Similique omnis, ut nobis quod rem laudantium obcaecati? Ipsam, nihil impedit.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum necessitatibus beatae, blanditiis modi provident suscipit tenetur fuga itaque nemo. 
             Delectus hic quia quis molestias quod explicabo minima eius maxime? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Aliquam ut non fugit, nihil minus mollitia rerum deserunt repudiandae consequuntur, alias, laboriosam nisi ratione excepturi dolorum? Veritatis provident vero voluptates autem.</p></div>
        </div>
    )
}
