import React, { useContext, useEffect } from "react";
import {DivLeft, DivMid, DivRight, MainContainer, DivOne} from '../header/HeaderStyle'
import Logo from '../../img/lgo.png'
import { GlobalStates } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import {goToPokedex, goToBack, goToHome} from '../../route/cordinator'

function Header(){
    let page = localStorage.getItem('screen');
    const navigate = useNavigate()
    const decide = () =>{
        if (page == 'index'){
            return <button onClick={()=>goToPokedex(navigate)}>Ver Pokedex</button>
        } else if(page == 'pokedex') {
            return <button onClick={()=>goToHome(navigate)}>Voltar</button>
        }
    }

    useEffect(()=>{
        decide()
        console.log(page)
    },[])

    return(
        <MainContainer>
            <DivOne>
                <DivLeft>
                    {decide()}
                </DivLeft>
                <DivMid>
                    <img src={Logo}/>
                </DivMid>
                <DivRight/>
            </DivOne>
            <hr/>
        </MainContainer>
    )
}

export default Header;