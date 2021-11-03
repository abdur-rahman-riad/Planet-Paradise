import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import TravelArrange from '../TravelArrange/TravelArrange';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offerings></Offerings>
            <TravelArrange></TravelArrange>
            <Category></Category>
        </div>
    );
};

export default Home;