import REACT from 'react';

const Article = (props) => {
    return (
        <div className='Article'>
            <h3> {props.titulo} </h3>
            <p> {props.contenido} </p>
        </div>
    );
};

export default Article;