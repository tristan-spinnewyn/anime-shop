import { COMMANDE, removeInStore, setInStore, getInStore } from "./localStorage";


export function getCommande(){
    return getInStore(COMMANDE)
}

export function addCommande(commande){
    setInStore(COMMANDE,commande)
}

export function removeCommande(){
    removeInStore(COMMANDE)
}