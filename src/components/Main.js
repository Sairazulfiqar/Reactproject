import React from 'react';
import '../styles/cuerpo.css';
import PerfilUsuario from './PerfilUsuario';
import Article from './Article';
import Calculadora from './Calculadora';

const Main = () => { 
    const titulo = 'Titulo de artículo';
    const contenido = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit commodo dui, ac lobortis elit cursus ac. Praesent sed dui sit amet magna laoreet venenatis.'
    const nombre = 'Saira';
    const imagen = 'http://via.placeholder.com/50';
    return (
        <div>
        <h1>Contenido Principal</h1>
        <Article titulo={titulo} contenido={contenido}/> 
        <Article titulo={titulo} contenido={contenido}/>

        <PerfilUsuario nombre={nombre} imagen={imagen} />
            <div>
            <h2> Calculadora</h2>
            <Calculadora /> 
            </div>
        </div>
    );
};

export default Main;
