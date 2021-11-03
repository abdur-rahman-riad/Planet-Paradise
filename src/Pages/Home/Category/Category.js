import React from 'react';
import Adventure from '../../../images/adventure.png';
import SeaBeach from '../../../images/sea.png';
import Mountain from '../../../images/mountain.png'
import SnowFall from '../../../images/snow.png';
import CampFire from '../../../images/camp.png';
import Popular from '../../../images/popular.png';
import './Category.css';

const Category = () => {
    return (
        <div className="container my-5 py-5">
            <div className="category-title">
                <p className="category-p">We suggest you the best tour collection</p>
                <h2 className="fw-bold">Choose Your Favorite Tours</h2>
                <p className="category-p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maxime dolore ut modi neque numquam nulla, dignissimos aspernatur soluta maiores?</p>
            </div>

            <div className="row g-3">
                <div className="col-md-2">
                    <div className="category">
                        <img src={Adventure} width="75%" alt="Loading Category" />
                        <h5 className="fw-bold mt-2">Adventure</h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="category">
                        <img src={SeaBeach} width="75%" alt="Loading Category" />
                        <h5 className="fw-bold mt-2">Sea Beach</h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="category">
                        <img src={Mountain} width="75%" alt="Loading Category" />
                        <h5 className="fw-bold mt-2">Mountain</h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="category">
                        <img src={SnowFall} width="75%" alt="Loading Category" />
                        <h5 className="fw-bold mt-2">Snowfall</h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="category">
                        <img src={CampFire} width="75%" alt="Loading Category" />
                        <h5 className="fw-bold mt-2">Camp Fire</h5>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="category">
                        <img src={Popular} width="75%" alt="Loading Category" />
                        <h5 className="fw-bold mt-2">Popular</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;