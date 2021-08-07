import './header.css';
import React from 'react';
import perfil from '../../img/perfil.jpg';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import cvImg from '../../img/cv.png'
import wsp from '../../img/wsp.png'
import cv from '../../cv/cv.pdf';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {useEffect} from 'react'

function highlight() {
    let h1 = document.getElementById('h1')
    let profileImg = document.getElementById('profileImg')

    h1.className = 'h1Hover'
    profileImg.className = 'profileImgHover'
}
function highlightless() {
    let h1 = document.getElementById('h1')
    let profileImg = document.getElementById('profileImg')
    
    h1.className = 'h1'
    profileImg.className = 'profileImg'
}

export function Header() {

    const {ref, inView } = useInView()
    const animation = useAnimation()
    const titleAnimation = useAnimation()
    
    useEffect(() => {
        
        /* const view =  (  */
        if (inView) {
            animation.start({
                x: '0px',
                opacity: 1,
                transition: { duration: 2, delay: 0.8 }
            });
            titleAnimation.start({
                y: '0px',
                opacity: 1,
                transition: { duration: 1.5}
            })
        }
        if (!inView) {
            animation.start({
                x: '-100px',
                opacity: 0
            });
            titleAnimation.start({
                y: '-150px',
                opacity: 0
            })
        }
    }, [inView, animation, titleAnimation])


    return (
        <div className='header'>
            <div className='data' ref={ref}>
                <motion.div animate={titleAnimation} className='saludo' >
                    <span >Hola, me llamo <h1 id='h1' className='h1' onMouseOver={highlight} onMouseOut={highlightless}>Ariel Romero</h1></span>
                </motion.div>
                <motion.div className="movingDiv" animate={animation}>
                    <span className='saludo'>Soy <h2 className='h2'>Fullstack Web Developer</h2></span>
                    <div className=' coments1'>
                        <p className='coments'>Me apasiona <span className='demasiado'>demasiado</span> programar...</p>
                        <p className='coments'>...y para ser mejor en ello se que es fundamental la humildad y el compañerismo.</p>
                    </div>
                </motion.div>
            </div>
            <div className='profileImgDiv'>
                <img id='profileImg' className='profileImg' src={perfil} alt="foto de perfil" onMouseOver={highlight} onMouseOut={highlightless}/>
                <div className='links'>
                    <div className='linGitLinks'>
                        <a className='linkImg' href="https://www.linkedin.com/in/arielr25/" target='_blank' rel="noreferrer"><img className='img' src={linkedin} alt="vinculo a linkedin" /></a>
                        <a className='linkImg' href="https://github.com/ArielR25" target='_blank' rel="noreferrer"><img className='img git' src={github} alt="vinculo a github" /></a>
                        <a className='linkImg' href="https://wa.me/3835432913" target='_blank' rel="noreferrer"><img className='img git' src={wsp} alt="vinculo a github" /></a>
                    </div>
                    <div className='cvLink'>
                        <a className='cvLinka' href={cv} target='_blank' rel="noreferrer"><img className='img cv' src={cvImg} alt="vinculo a linkedin" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;