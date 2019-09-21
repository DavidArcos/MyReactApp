import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const { 
        src,
        autor,
        id
    } = props;

    return (
        <div className="card-images">
            <img className="img-galery" src={src} alt={autor}/>
            <Link to={`/gallery/${id}/${autor}`}>{autor}</Link>
        </div>
    );
};
Card.propTypes = {
    src: propTypes.string.isRequired,
    autor: propTypes.string.isRequired,
    id: propTypes.number
}

export default Card;