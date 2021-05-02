import React,{useState} from 'react'
import { newsletterRegister } from '../../api/newsletterApi'
import {toast} from 'react-toastify'; 
  
import 'react-toastify/dist/ReactToastify.css'; 
toast.configure()

export default function Newsletter() {
    const [newsletter, setemail] = useState({email:''})

    const handleChange = (event)=>{
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        setemail({[name] : value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(newsletter.email == ''){
            toast.warn('Veuillez inscrire votre adresse mail !')
            return
        }
        try{
            const result = await newsletterRegister(newsletter)
            console.log(result.status)
            if(result.status == 200){
                toast.success('Enregistrement réalisé avec succés !')
                setemail({email:''})
            }else{
                toast.error('Votre adresse mail est deja enregistrer ou une erreur est survenue :( ')
            }
        }catch(e){
            toast.error('Votre adresse mail est deja enregistrer ou une erreur est survenue :( ')
        }
        
    }

    return (
        <section className="">
            <form onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <p className="pt-2">
                            <strong>Enregistrez vous pour recevoir nos newletters !</strong>
                        </p>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="form-outline form-white mb-4">
                            <input onChange={handleChange} value={newsletter.email} placeholder="Adresse mail" type="email" id="email" name="email" className="form-control" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-outline-light mb-4">Enregistrer</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
