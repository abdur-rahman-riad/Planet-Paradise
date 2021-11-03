import React from 'react';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/login.png';
import './Login.css';

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <div className="container my-3">
            <div className="login-card">
                <h2 className="fw-bold">Please Sign In</h2>
                <img src={loginImg} alt="Loading Login Banner" />
                <button onClick={googleSignIn} className="btn btn-dark google">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;