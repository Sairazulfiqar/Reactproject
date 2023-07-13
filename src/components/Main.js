import React from 'react';
import '../styles/cuerpo.css';
import PerfilUsuario from './PerfilUsuario';
import Article from './Article';
// import Calculadora from './Calculadora';

const Main = () => { 
    const titulo = 'Titulo de artículo';
    const contenido = 'Contenido del artículo'
    const nombre = 'Saira';
    const imagen = 'http://via.placeholder.com/150';
    return (
        <div>
        <h1>Contenido Principal</h1>
        <Article titulo={titulo} contenido={contenido}/>
        <PerfilUsuario nombre={nombre} imagen={imagen} />

        </div>
    );
};

export default Main;
