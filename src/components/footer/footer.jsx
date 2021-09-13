import './footer.css';
import React from 'react';
import js from '../../img/javascript.png';
import github from '../../img/github.png';
import postgre from '../../img/postgresql.png';
import react from '../../img/react.png';
import redux from '../../img/redux.png';
import sequelize from '../../img/sequelize.png';
import git from '../../img/git.png';
import html from '../../img/html5.png';
import node from '../../img/nodeJS.png';
import css3 from '../../img/CSS3.png';

const icons = [
    {name:'Javascript', img: js},
    {name:'React' , img: react},
    {name:'Redux' , img: redux},
    {name:'PostgreSQL' , img: postgre},
    {name:'Sequelize' , img: sequelize},
    {name:'NodeJS' , img: node},
    {name:'HTML5' , img: html},
    {name:'CSS3' , img: css3},
    {name:'Git' , img: git},
    {name:'GitHub' , img:github},
];

export function Footer() {
    return (
        <div className='footer'>
            {icons.map( (icon) => {
                return (<div className='skill'>
                <p className='title'>{icon.name}</p>
                <img key={icon.name} className='icon' src={icon.img} alt={icon.name} />
                </div>)
            })}
        </div>
    )
}

export default Footer;