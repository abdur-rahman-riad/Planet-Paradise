import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../images/error.PNG'
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container text-center my-5 py-5">
            <img src={Error} alt="" />
            <h2 className="fw-bold text-danger">404 Page Not Found</h2>
            <Link to="/">
                <button className="btn btn-dark mt-5">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;