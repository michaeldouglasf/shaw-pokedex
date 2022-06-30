import React,{useState,useEffect}from "react";
import Header from "../Components/header/Header"
import { PokemonDetail } from "./PokemonDetail";
import axios from 'axios'
import { CardPokemons } from '../Components/CardPokemons/CardPokemons';



export function Home(){

    useEffect(()=>{
        localStorage.setItem('screen','index')
    })
    const [pokeData , setPokeData]=useState([])
    const [loading , setLoading]=useState(true)
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl ]=useState()
    const [prevUrl, setPrevUrl]=useState()
    const [pokeDex,setPokeDex] = useState()
  


    const pokeFun=async()=>{
        setLoading(false)
        const res=await axios.get(url)
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        //  console.log(res.data.previus)
        getPokemon(res.data.results)
        // setTypePokemon(res.data.sprites)
      
    }
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result=await  axios.get(item.url);
            setPokeData((state)=>{
                state=[...state,result.data]
                //   state.sort((a,b)=>a.id>b.id?1:-1)
                return state
            })
        })
  
    }
    useEffect(()=>{
        pokeFun()
    },[url])
    return(
        <>
            <Header/>
            <p>Home</p>
           <div className="container">
                <div className="left-content">
                    <CardPokemons pokemon={pokeData} loading={loading}  infoPokemon={poke=>setPokeDex(poke)} />
                                      
                    <div className="btn-group">
                    { prevUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(prevUrl)
                        }} >Previous</button>}

                        {nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>  }
                    </div>
                </div>
                <div className="right-content">
                    <PokemonDetail data={pokeDex}/>
                </div>
           </div>
            {/* <button onClick={()=>goToPokedex(navigate) }>Pokedex</button> */}
        </>
    )
}