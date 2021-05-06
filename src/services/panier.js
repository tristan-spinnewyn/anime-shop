import { getInStore,CARD, setInStore,removeInStore, COMMANDE, USER } from "./localStorage"

export function getCard(){
    return getInStore(CARD)
}

export function addCard(article){
    let card = getInStore(CARD)
    if(card == undefined || card == []){
        card = [article]
    }else{
        let trouver = false
        card.map((ligne,index)=>{
            if(ligne.produit.id == article.produit.id){
                ligne.quantite = ligne.quantite + article.quantite
                trouver = true
            }
        })
        if(!trouver){
            card.push(article)
        }
    }

    setInStore(CARD,card)
}

export function removeCard(index){
    const card = getInStore(CARD)

    card.splice(index,1)

    setInStore(CARD,card)
}

export function updateQte(index, qte){
    const card = getInStore(CARD)

    const ligne = card[index]

    ligne.quantite = qte

    if(ligne.quantite > 0 ){
        card.splice(index,1,ligne)
    }
    else{
        card.splice(index,1)
    }
    setInStore(CARD,card)
}

export function nbArticles(){
    const card = getInStore(CARD)
    return card.length
}

export function cancel(){
    removeInStore(CARD)
    removeInStore(COMMANDE)
    removeInStore(USER)
}