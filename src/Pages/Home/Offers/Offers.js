import React from 'react';
import './Offers.css'

const Offers = (props) => {
    const { id, title, price, img, description, duration, departure, destination } = props.offers;


    return (
        <div className="col-md-4">
            <div className="card h-100 package-card">
                <img src={img} alt="Loading Tour Package Banner" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>

                <div>
                    <div className="d-flex px-3 mb-3 align-items-center justify-content-between">
                        <p className="fw-bold m-0">{duration}</p>
                        <p className="fw-bold text-secondary m-0">{departure} to {destination}</p>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                        <h3 className="fw-bold">{price} tk</h3>
                        <button className="btn btn-dark">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;