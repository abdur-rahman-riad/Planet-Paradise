import React from 'react';
import useAuth from '../../../hooks/useAuth';
import loginImg from '../../../images/login.png';
import { useLocation, useHistory } from "react-router-dom"
import './Login.css';

const Login = () => {
    const { googleSignIn, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            }).finally(() => setIsLoading(false));
    }

    return (
        <div className="container my-3">
            <div className="login-card">
                <h2 className="fw-bold">Please Sign In</h2>
                <img src={loginImg} alt="Loading Login Banner" />
                <button onClick={handleGoogleSignIn} className="btn btn-dark google">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;