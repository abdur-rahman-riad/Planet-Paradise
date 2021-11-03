import React from 'react';
import BannerImg from '../../../images/banner-1.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className="custom-bg">
            <div className="container py-5">
                <div className="row align-items-center py-4">
                    <div className="col-md-6">
                        <h2 className="fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus culpa numquam recusandae accusamus doloremque amet, exercitationem nam minus corrupti maiores, impedit quam ipsam aperiam reprehenderit, corporis aut autem qui quaerat at laboriosam animi pariatur consequatur! Non voluptas quis iure, enim totam expedita temporibus possimus reiciendis similique repellat culpa dolor!</p>
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