import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-light text-dark custom-footer">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={logo} width="120px" alt="Loading Site Logo" />
                        <h4 className="text-success footer-name">Planet Paradise</h4>
                    </div>

                    <div className="col-md-4 text-center custom-list">
                        <h5>Important Link</h5>
                        <li>Home</li>
                        <li>Packages</li>
                        <li>About</li>
                        <li>Conact</li>
                    </div>

                    <div className="col-md-4 text-center custom-list">
                        <h5>Social Media</h5>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                        <li>Twitter</li>
                    </div>
                </div>
                <hr />
                <p className="text-center text-secondary pb-2">CopyRight &copy; 2021 All Right Reserved Planet Paradise</p>
            </div>
        </div>
    );
};

export default Footer;