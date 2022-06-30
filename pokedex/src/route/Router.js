import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import {Pokedex} from "../pages/Pokedex"
import {PokemonDetail} from "../pages/PokemonDetail"

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='pokedex'  element={<Pokedex/>}/>
                <Route path='pokemonDetail' element={<PokemonDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router