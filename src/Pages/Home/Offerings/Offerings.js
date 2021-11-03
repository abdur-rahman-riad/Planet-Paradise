import React, { useEffect, useState } from 'react';
import Offers from '../Offers/Offers';
import './Offerings.css';

const Offerings = () => {
    const [offerings, setOfferings] = useState([]);

    useEffect(() => {
        fetch('/offers.json')
            .then(response => response.json())
            .then(data => setOfferings(data))
    }, [])


    return (
        <div className="container my-5 py-5">
            <h3 className="fw-bold text-center text-success">Our Offerings</h3>

            <div className="row g-4">
                {
                    offerings.map(offers => <Offers
                        key={offers.id}
                        offers={offers}
                    ></Offers>)
                }
            </div>
        </div>
    );
};

export default Offerings;