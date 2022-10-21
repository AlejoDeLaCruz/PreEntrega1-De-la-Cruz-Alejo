import React from 'react';
import Header from './Header';      //Tengo que importar el header a la App, no al index  para que el html se haga en la app, no en el div root
import Main from './Main'
import Footer from './Footer';

function App(){
    return (
        <>          
            <Header/>
            <Main/>
            <Footer/>  
        </>          
    );
}

export default App