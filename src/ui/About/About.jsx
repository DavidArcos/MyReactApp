import React, { Fragment } from 'react';
import './About.css';

const About = () =>{
    return (
        <Fragment>
            <div className="container">
                <div className="title">
                    <h3>David Arcos Cruz</h3>
                </div>
                <div className="content">
                    <div>
                        <h3>Hobbies</h3>
                        <ul className="list-about">
                            <li>Aficionado de videojuegos(Halo, Gears, Fifa, NFS, etc).</li>
                            <li>Me agrada el manga y anime de One piece.</li>
                            <li>Aficionado de Futbol, declinado por el equipo de las Chivas de Guadalajara.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Profession</h3>
                        <p>Soy Ing. En Desarrollo de Software, desarrollando software a la medida. Me desempeño en multiples lenguajes de programación como por
                            ejemplo .Net, PHP,JS, NodeJs,Java. Manejo de Base de datos MySql, SQL Server, Postgres Sql.
                        </p>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    );
}

export default About;