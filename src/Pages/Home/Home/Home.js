import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <hr />
            <Offerings></Offerings>
        </div>
    );
};

export default Home;