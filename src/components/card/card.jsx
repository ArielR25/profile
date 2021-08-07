import './card.css'
import React from 'react';

function openDetails(myID,cardID) {
    let details = document.getElementById(myID);
    let cardContent = document.getElementById(cardID);
    details.className = 'detailsUsing';
    cardContent.className = 'cardContent';
}
function closeDetails(myID,cardID){
    let details = document.getElementById(myID);
    let cardContent = document.getElementById(cardID);
    details.className = 'details';
    cardContent.className = 'cardContentUsing';
}

export function Card( {cardContents} ) {
    let autoID = 0;
    return (
        <div className='allCards'>
            {cardContents.map( (content) => {
                const { name, github, img, video, description } = content;
                let myID = autoID++;
                return (
                <div key={myID} className='cardBorder'>
                    <div id={`c+${myID}`} className='cardContentUsing'>
                        <div className='h4CardDiv'>
                            <h4 className='h4Card'>{name}</h4>
                        </div>
                        <p className='githubCard'><a className='a' target='_blank' rel="noreferrer" href={github}>GitHub</a></p>
                        <div className='imgButtonDiv'>
                            <div className='imgCardFit'>
                                <img className='imgCard' src={img} alt={`descripción de ${name}`} />
                            </div>
                            <button className='buttonCard' onClick={() => openDetails(myID,`c+${myID}`)}>Detalles</button>
                        </div>
                    </div>
                    <div id={myID} className='details'>
                        <div className='video'>{video}</div>
                        <div className='description'>
                            <p className='pDetails'>{description}</p>
                            <button className='buttonCard' onClick={() => closeDetails(myID,`c+${myID}`)}>X</button>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Card;