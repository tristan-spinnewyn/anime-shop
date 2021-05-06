import { USER, removeInStore, setInStore, getInStore } from "./localStorage";


export function getUser(){
    return getInStore(USER)
}

export function addUser(user){
    setInStore(USER,user)
}

export function removeUser(){
    removeInStore(USER)
}