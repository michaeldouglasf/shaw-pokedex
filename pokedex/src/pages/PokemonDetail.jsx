import React from "react"


export function PokemonDetail({data}){

    return(
        <div className="detail">  
        {
            (!data) ?"": (
                <>
                    <h1>{data.name}</h1>
                    <img className="image-details" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}alt="" />
                    <img className="back-pokemon" src={data.sprites.back_default} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map(((poke)=>{
                                return(
                                    <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                )
                            }))
                        }
                        
                    </div>
                    <div className="base-stat">
                      {
                          data.stats.map((poke)=>{
                              return(
                                  <div>
                                    <h3>{poke.stat.name}:{poke.base_stat} </h3>
                                  </div>
                              )
                          })
                      }
                    </div>
                </>
            )
                
        }
        
    </div>
    )
}