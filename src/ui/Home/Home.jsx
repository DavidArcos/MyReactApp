import React, { useState, Fragment } from 'react';
import Input from '../../components/Input/Input';
const Home = () => {
    const [ name, setName ] = useState('');
    return (
        <Fragment>
            <h1>Bienvenido a Home {name}</h1>
            <Input value={name} onChange={(ev) => setName(ev.target.value)} placeholder="Type your name"/>
        </Fragment>
        
    );
}

export default Home;