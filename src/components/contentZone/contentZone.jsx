import './contentZone.css';
import React from 'react';
import Card from '../card/card';
import home from '../../img/home.jpg';

const cardContents = [
    {
        name:'API de video juegos',
        github:'https://github.com/ArielR25/profile',
        img: home,
        video:<iframe className='ytVideo' width="560" height="315" src="https://www.youtube.com/embed/mBtUklY4L8U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        description: 'Esta es mi API de video juegos, creada como aprendizaje en la academia soy Henry. Fue realizada con React, Redux, Javascript en back y front, Sequelize y PostgreSQL.'
    }
];

export function ContentZone() {
    
        return (
        <div>
            <div className='contentZone'>
                <h3 className='h3'>Mis Proyectos</h3>
                <Card cardContents={cardContents}/>
            </div>
            
        </div>
    )
}

export default ContentZone;