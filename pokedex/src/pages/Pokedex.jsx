import React from "react";
import { goToHome } from "../route/cordinator";
import { useNavigate } from 'react-router-dom';
import Header from "../Components/header/Header"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { CardPokemons } from "../Components/CardPokemons/CardPokemons";


export function Pokedex (){
    const navigate = useNavigate()

    useEffect(()=>{
        var page = localStorage.getItem('screen')
        setPrevUrl(page)
        let teste = localStorage.getItem('pokeDex')
        if(teste === null){

        }else{
            if(teste.length == 0){
  
            }else{ 
              let set = localStorage.getItem('pokeDex')
              let sett = JSON.parse(set)
              setPokeDex(sett)
              console.log(sett)
            }
        }
      },[])
  
      useEffect(()=>{
        if(pokeDex.length == 0){
  
        }else if (pokeDex !== []){ 
          localStorage.setItem('pokeDex', JSON.stringify(pokeDex))
          console.log(pokeDex)
        }
      },[pokeDex])
    
    const [pokeData , setPokeData]=useState([])
    const [loading , setLoading]=useState(true)
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl ]=useState()
    const [prevUrl, setPrevUrl]=useState()
    const [pokeDex,setPokeDex] = useState([])


    const pokeFun=async()=>{
        setLoading(false)
        const res=await axios.get(url)
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previus)
        getPokemon(res.data.results)
        console.log(res.data.results)
    }
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result=await  axios.get(item.url);
            console.log(result.data);
            setPokeData((state)=>{
                state=[...state,result.data]
                  state.sort((a,b)=>a.id>b.id?1:-1)
                return state
            })
            console.log(pokeData);
        })
    }
    useEffect(()=>{
        pokeFun()
    },[url])

    return(
        <div className="ContainerDetail">
            <Header/>
            <div className="container">
                <div className="ContainerPokedex">
                    <CardPokemons className="" pokemon={pokeDex} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                </div>
            </div>
        </div>
    )
}