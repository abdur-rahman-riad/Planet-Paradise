import React, { useEffect, useState } from 'react';
import Offers from '../Offers/Offers';
import './Offerings.css';

const Offerings = () => {
    const [offerings, setOfferings] = useState([]);

    useEffect(() => {
        fetch('https://polar-hollows-28101.herokuapp.com/tourpackages')
            .then(response => response.json())
            .then(data => setOfferings(data))
    }, [])


    return (
        <div className="container my-5 py-5">
            <h3 className="fw-bold text-center fst-italic text-success">Tour Package we Offers</h3>

            <div className="row g-4">
                {
                    offerings.map(offers => <Offers
                        key={offers._id}
                        offers={offers}
                    ></Offers>)
                }
            </div>
        </div>
    );
};

export default Offerings;