import React from 'react';
import '../styles/cuerpo.css';
import PerfilUsuario from './PerfilUsuario';

const Main = () => { 
    const nombre = 'Saira';
    const imagen = 'http://via.placeholder.com/150';
    return (
        <div>
        <h1>Contenido Principal</h1>
        <PerfilUsuario nombre={nombre} imagen={imagen} />

        </div>
    );
};

export default Main;
