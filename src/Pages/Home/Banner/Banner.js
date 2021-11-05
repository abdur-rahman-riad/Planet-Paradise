import React from 'react';
import BannerImg from '../../../images/banner-1.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className="custom-bg">
            <div className="container py-5">
                <div className="row align-items-center py-4">
                    <div className="col-md-6 bannerP">
                        <h2 className="fw-bold text-success fst-italic">The world is a book and those who do not travel read only one page.</h2>
                        <p className="text-secondary">We offer a comprehensive range of travel packages to the needs of passengers traveling domestically, as well as traveling to and from international destinations. We provide the customers with various tools and information that they need to research, plan, book and purchase travel products and services in Bangladesh as well as outside Bangladesh.</p>
                        <button className="btn btn-dark">Explore Now</button>
                    </div>

                    <div className="col-md-6">
                        <img src={BannerImg} width="100%" className="img-fluid" alt="Home Banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;