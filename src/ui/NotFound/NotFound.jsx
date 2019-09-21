import React from 'react';

const NotFound = ({location}) => {

    return (
        <h1>Esta pagina {location.pathname} no esta disponible! :(</h1>
    );
};

export default NotFound;