import React from 'react';
import loginImg from '../../../images/login.png';
import './Login.css';

const Login = () => {
    return (
        <div className="container my-3">
            <div className="login-card">
                <h2 className="fw-bold">Please Sign In</h2>
                <img src={loginImg} alt="Loading Login Banner" />
                <button className="btn btn-dark">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;