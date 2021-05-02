import React, {useState} from 'react'
import FontAwesome from 'react-fontawesome'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'; 
import { contactRegister } from '../api/contactApi';
toast.configure()

export default function Contact() {
    const [contactFom, setcontactForm] = useState({fullname:'',email:'',subject:'',message:''})

    const handleChange = (event)=>{
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        setcontactForm({...contactFom, [name] : value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(contactFom.fullname == "" || contactFom.email == "" ||contactFom.subject == "" || contactFom.message == ''){
            toast.warn("Tout les champs sont requis !")
            return
        }

        try{
            console.log(contactFom)
            const result = await contactRegister(contactFom)
            if(result.status === 200){
                toast.success("Votre message a bien été envoyé !")
                setcontactForm({fullname:'',email:'',subject:'',message:''})
            }
        }catch(e){
            toast.error("Une erreur est survenue :'( ")
        }
        
    }


    return (
        <section className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contactez nous !</h2>
            <p className="text-center w-responsive mx-auto mb-5">Si vous avez la moindre question, contactez nous via notre formulaire ci-dessous.</p>
            <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                    <form onSubmit={handleSubmit} id="contact-form" name="contact-form">
                        <div className="row m-2">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" key="1" onChange={handleChange} value={contactFom.fullname} placeholder="Votre nom et prenom" id="fullname" name="fullname" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0 ">
                                    <input type="text" key="2" onChange={handleChange} value={contactFom.email} placeholder="Votre email" id="email" name="email" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" key="3" onChange={handleChange} value={contactFom.subject} id="subject" placeholder="Sujet de votre demande" name="subject" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" onChange={handleChange} value={contactFom.message} placeholder="Votre message" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="text-center text-md-left">
                            <button className="btn btn-primary">Envoyer</button>
                        </div>
                    </form>
                    
                </div>

                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li><FontAwesome name="map-marker" size="2x"/>
                            <p>Esimed, marseille</p>
                        </li>
                        <li><FontAwesome name="phone" size="2x"/>
                            <p>+ 336 06 06 06 06</p>
                        </li>
                        <li><FontAwesome name="envelope" size="2x"/>
                            <p>contact@animeshop.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
