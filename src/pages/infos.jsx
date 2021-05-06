import React,{useState} from 'react'
import { toast } from 'react-toastify'
import { cancel } from '../services/panier'
import { addUser } from '../services/user'

export default function Infos(props) {

    const [user, setuser] = useState({email:'',nom:'',prenom:'',adresse:'',cp:'',ville:'',immeuble:'',telephone:'',genre:'',password:'azerty',username:Math.floor(Math.random() * 999999)})

    const handleChange = (event)=>{
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setuser({...user,[name]:value})
    }

    const handleValidate = ()=>{
        if(user.email == '' || user.nom == '' || user.prenom == '' || user.adresse == '' || user.cp == '' || user.ville == ''|| user.telephone == '' || user.genre ==''){
            toast.warn("Un champ requis n'est pas remplis")
            
            return
        }
        console.log(user)
        addUser(user)
        props.history.push("/paiement")
    }

    const handleCancel = ()=>{
        if(window.confirm("Etes vous sur de vouloir annuler la commande en cours ?")){
            cancel()
            props.history.push("/")
        }
    }
    return (
        <div>
            <input onChange={handleChange} required type="text" id="email" name="email" className="w-75 m-3 form-control" placeholder="adresse mail*" aria-label="Username" aria-describedby="basic-addon1"/>
            <div className=" m-3 custom-control custom-radio custom-control-inline">
                <label>Genre*: </label>
                <input required onChange={handleChange} value="1" type="radio" id="genre1" name="genre" className="  m-3 custom-control-input" />
                <label className="m-3 custom-control-label" htmlFor="genre1">Monsieur</label>
                <input required onChange={handleChange} value="2" type="radio" id="genre2" name="genre" className="  m-3 custom-control-input"/>
                <label className="custom-control-label" htmlFor="genre2">Madame</label>
            </div>
            <input required onChange={handleChange} type="text" id="nom" name="nom" className=" m-3 w-75 form-control" placeholder="Nom*" aria-label="Username" aria-describedby="basic-addon1"/>
            <input required onChange={handleChange} type="text" id="prenom" name="prenom" className="w-75 m-3 form-control" placeholder="Prénom*" aria-label="Username" aria-describedby="basic-addon1"/>
            <input required onChange={handleChange} type="text" id="adresse" name="adresse" className="w-75 m-3 form-control" placeholder="Adresse*" aria-label="Username" aria-describedby="basic-addon1"/>
            <input onChange={handleChange} type="text" id="immeuble" name="immeuble" className="w-75 m-3 form-control" placeholder="Immeuble, résidence, bâtiment" aria-label="Username" aria-describedby="basic-addon1"/>
            <input required onChange={handleChange}t type="text" id="cp" name="cp" className="w-75 m-3 form-control" placeholder="Code postal*" aria-label="Username" aria-describedby="basic-addon1"/>
            <input required onChange={handleChange} type="text" id="ville" name="ville" className="w-75 m-3 form-control" placeholder="Ville*" aria-label="Username" aria-describedby="basic-addon1"/>
            <input required onChange={handleChange} type="text" id="tel" name="telephone" className="w-75 m-3 form-control" placeholder="Téléphone*" aria-label="Username" aria-describedby="basic-addon1"/>
            <div className="d-flex justify-content-around">
                <button onClick={handleCancel} className="btn btn-primary">Annuler ma commande</button>
                <button onClick={handleValidate} className="btn btn-primary">Valider ma commande</button>
            </div>
        </div>
    )
}
