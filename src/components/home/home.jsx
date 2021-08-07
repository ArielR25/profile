import './home.css';
import React from 'react';
import ContentZone from '../contentZone/contentZone';
import Header from '../header/header';
import SoftSkills from '../softSkills/softSkills';
import Footer from '../footer/footer';

export function Home () {

    return (
        <div className='home'>
            <Header />
            <hr className='division'/>
            <ContentZone />
            <hr className='division'/>
            <SoftSkills />
            <hr className='division'/>
            <Footer />
        </div>
    )
}

export default Home;