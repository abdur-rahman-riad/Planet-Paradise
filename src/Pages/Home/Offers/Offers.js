import React from 'react';
import './Offers.css'

const Offers = (props) => {
    const { id, title, price, img, description, duration, departure, destination } = props.offers;


    return (
        <div className="col-md-4">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid" width="100%" alt="Tour Package Banner" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text">{description}</p>

                    <div className="d-flex align-items-center justify-content-between">
                        <p className="fw-bold m-0">{duration}</p>
                        <p className="fw-bold text-secondary m-0">{departure} to {destination}</p>
                    </div>
                </div>

                <div className="card-footer d-flex align-items-center justify-content-between">
                    <h3 className="fw-bold">{price} tk</h3>
                    <button className="btn btn-dark">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Offers;