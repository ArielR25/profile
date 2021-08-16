import './contentZone.css';
import React from 'react';
import Card from '../card/card';
import img from '../../img/dragon.jpg';

const cardContents = [
    {
        name:'API de videojuegos',
        github:'https://github.com/ArielR25/PI-Henry-VideoGames',
        img,
        video:<iframe className='ytVideo' width="560" height="315" src="https://www.youtube.com/embed/mBtUklY4L8U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        description: 'descripcion-del-proyecto-escrita asldkjfsldkfj asd lksdjf lsdf lsdkf sdlfk slfsj dlsj afljs laskdjf asldf jasld fjsal dfj asldkfjsald kfjasldfkj saldf j asldkfjasl dkfj asldkfj asldkjfasl dkjf sladfj asldkfj saldkfj asldkfj lsdkf jlsadkfj sladkfj lsadkfjsaldf ldskj saldfk jas aslñdkjfl asdkfj alsdkfj asldkfjsa ldkfajs ldkfjas ldkfj alsdkfj lskj laskdjfalsdkfj alsdkfj asldkfj asldñfk jasdlkj'
    },
    {
        name:'API de videojuegos replica de ejemplo asdsdfsadf asdfsdfsdf',
        github:'https://github.com/ArielR25/PI-Henry-VideoGames',
        img,
        video:'https://www.youtube.com/watch?v=nr2_hX5RK7w',
        description: 'descripcion-del-proyecto-escrita'
    },
    {
        name:'API de videojuegos replica de ejemplo',
        github:'https://github.com/ArielR25/PI-Henry-VideoGames',
        img,
        video:'descripcion-del-proyecto',
        description: 'descripcion-del-proyecto-escrita'
    },
    {
        name:'API de videojuegos replica de ejemplo',
        github:'https://github.com/ArielR25/PI-Henry-VideoGames',
        img,
        video:'descripcion-del-proyecto',
        description: 'descripcion-del-proyecto-escrita'
    },
    {
        name:'API de videojuegos replica de ejemplo',
        github:'https://github.com/ArielR25/PI-Henry-VideoGames',
        img,
        video:'descripcion-del-proyecto',
        description: 'descripcion-del-proyecto-escrita'
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