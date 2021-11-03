import React from 'react';
import TourAbout from '../../../images/tour-about.png';
import './TravelArrange.css';

const TravelArrange = () => {
    return (
        <div className="container my-5">
            <div className="arrangement-title">
                <p>We are Specialized in</p>
                <h2 className="fw-bold">Tour & Travel Arrangment</h2>
                <hr />
            </div>

            <div className="row g-4 align-items-center">
                <div className="col-md-7">
                    <div className="shadow-sm border p-3 rounded-3">
                        <h4 className="fw-bold">We can be a great travel planner for you</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis beatae, doloremque aut sint blanditiis provident! Nemo nostrum saepe dolorem fugit ipsam, quis rem voluptatum libero, facilis maiores amet temporibus a beatae. Repellendus repudiandae commodi, odit, esse quidem, sed numquam optio harum dicta quaerat molestiae repellat quas voluptate molestias amet.</p>
                    </div>
                    <br />
                    <div className="shadow-sm border p-3 rounded-3">
                        <h4 className="fw-bold">We guide you all over the world</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellendus deleniti, modi nisi, necessitatibus ratione voluptates minus maxime recusandae, sint velit consectetur ab pariatur in! Nobis officia est quos facere voluptatibus reprehenderit placeat minus, explicabo exercitationem, libero quae fuga! Nemo, maiores eligendi? Modi laudantium illum aspernatur at consequatur. Voluptas, molestiae.</p>
                    </div>

                    <button className="btn btn-dark mt-3">Discover More</button>
                </div>

                <div className="col-md-5">
                    <img src={TourAbout} className="img-fluid" width="100%" alt="TourAbout Banner" />
                </div>
            </div>
        </div>
    );
};

export default TravelArrange;