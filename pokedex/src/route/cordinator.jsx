import { GlobalStates } from "../context"
import { useContext } from "react";

export const goToPokedex = (navigate) =>{
    navigate('/pokedex') 
    localStorage.setItem('screen', 'pokedex')
  }

  export const goToHome = (navigate) =>{
    navigate('/')
    localStorage.setItem('screen', 'index')
  }
  export const goToBack = (navigate) =>{
    let page = localStorage.getItem('screen')
     if (page == 'pokedex'){
      navigate('/')
     }else{
      navigate('/pokedex')
     }
  }

  export const goToDetail = (navigate) =>{
    navigate('/pokemon')
    localStorage.setItem('screen', 'detail')
  }

  