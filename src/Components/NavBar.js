import React from "react";
import {Button} from 'react-bootstrap';
import './estilos.scss';  
import CartWidget from './CartWidget'
import Greeting from './ItemListContainer'

const NavBar = () =>{

    const spotify = () => {
        window.location.href = "https://spotify.com";
    }

    return(
        <>
            <header id="main-header" className="header">
            <h1>GRIS</h1>
            <Button onClick={spotify}>¡Bienvenido!</Button>
            <nav> 
                <a href="#"><span className="material-icons">home</span></a>
                <a href="#"><span class="material-icons">search</span></a>
                <a href="#"><span class="material-icons">more_horiz</span></a>
                <CartWidget/>
            </nav>
            </header>
            <Greeting
                Guitarrista = "Guitarrista"
            />
        </>
       
    )
}

export default NavBar