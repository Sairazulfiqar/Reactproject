import React from 'react';

const PerfilUsuario = (props) => {
    const [edad, Setedad]= React.useState(27);
    const Change=() => { Setedad(28) };

return (
        <div>
        <h2> Nombre {props.nombre}</h2>
        <h2> Edad {edad}</h2>
        <img src={props.imagen}/> <br></br>
        <button onClick={Change}> Change </button>
        </div>
    );
};

export default PerfilUsuario;