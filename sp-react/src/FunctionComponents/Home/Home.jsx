import React from 'react';
import PreHeader from "../Navigator/PreHeader/PreHead";
import Banner from '../Banner/Banner';
import logo from '../../logo.svg';

function Home () {
        return (
            <>
                <PreHeader/>
                <Banner currentPage={'homepage'} imgSrc={logo}/>
            </>
        )
};

export default Home;