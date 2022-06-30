import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pokedex } from "../../pages/Pokedex";
// import { useNavigate } from "react-router-dom";
import typeColors from '../Typecolor';


export const CardPokemons =({ pokemon, loading, infoPokemon })=>{
    // const navigate = useNavigate()
    const onEnter = (id) =>{
        localStorage.setItem('idAtual', id)
    }

    const [pokeData , setPokeData]=useState([])
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl ]=useState()
    const [prevUrl, setPrevUrl]=useState()
    const [pokeDex,setPokeDex] = useState([])


    const pokeFun=async()=>{
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
      var page = localStorage.getItem('screen')
      setPrevUrl(page)
      let teste = localStorage.getItem('pokeDex')
      if(teste === null){

      }else{
        if(teste.length === 0){

        }else{ 
          let set = localStorage.getItem('pokeDex')
          let sett = JSON.parse(set)
          setPokeDex(sett)
          console.log(sett)
        }
      }
    },[])

    useEffect(()=>{
      if(pokeDex.length === 0){

      }else if (pokeDex !== []){ 
        localStorage.setItem('pokeDex', JSON.stringify(pokeDex))
        console.log(pokeDex)
      }
    },[pokeDex])

    const onClickPegar = (id) =>{
      
      setPokeDex([...pokeDex, id])
      console.log(id)
    }

    return(
      <>
        {(() => {
        switch(prevUrl) {
          case 'index':
            return <>{loading ? (
              <h1 className="loading"> Loading...</h1>
            ) : (
              pokemon.map((item) => {
                return (
                  <div className="card" style={{ backgroundColor: typeColors[item.types[0].type.name] }} key={item.id} onClick={()=>infoPokemon(item)}  onMouseEnter={()=>onEnter(item.id)}>
                    <div className="image">
                      <img className="image-pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt="" />
                    </div>
                      <h2>{item.name}</h2>
                      <h2>{item.types[0].type.name}</h2>
                      <button onClick={()=>onClickPegar(item)}>Pegar</button>
                  </div>
                );
              })
            )}
      
            {/* <button onClick={()=>goToHome(navigate) }>Voltar</button> */}
          </>
          case 'pokedex':
            return <>{loading ? (
              <h1 className="loading"> Loading...</h1>
            ) : (
              pokeDex.map((item) => {
                return (
                  <div className="card" style={{ backgroundColor: typeColors[item.types[0].type.name] }} key={item.id} onClick={()=>infoPokemon(item)}  onMouseEnter={()=>onEnter(item.id)}>
                    <div className="image">
                      <img className="image-pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt="" />
                    </div>
                      <h2>{item.name}</h2>
                      <h2>{item.types[0].type.name}</h2>
                      <button id="btncard" onClick={()=>onClickPegar(item)}>Pegar</button>
                  </div>
                );
              })
            )}
      
            {/* <button onClick={()=>goToHome(navigate) }>Voltar</button> */}
          </>
        }
        })()}
      </>
    )
}