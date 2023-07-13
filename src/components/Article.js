import REACT from 'react';
import '../styles/Article.css'

const Article = (props) => {
    return (
        <div className='Article'>
            <h3 className='grid'> {props.titulo} </h3>
            <p className='grid'> {props.contenido} </p>
        </div>
    );
};

export default Article;