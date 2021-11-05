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
                    <div className="shadow-sm arrangmentP border p-3 rounded-3">
                        <h4 className="fw-bold text-secondary fst-italic">We can be a great travel planner for you</h4>
                        <p className="text-secondary">Before you can even begin to plan a trip, you need to take a good look at your finances and figure out how much money you have to spend on your adventure. This will dictate a lot of the future steps including where you can travel to and for how long. Don’t forget to do a little digging and make sure that the time of year you plan to travel is optimal. We have failed to do our research a few times and it ended up really affecting our trip.</p>
                    </div>
                    <br />
                    <div className="shadow-sm arrangmentP border p-3 rounded-3">
                        <h4 className="fw-bold text-secondary fst-italic">We guide you all over the world</h4>
                        <p className="text-secondary">A comprehensive guide to the world’s best travel destinations, It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events. Great for those short on holiday ideas or those wanting to find out more about a country before visiting. The preparation of the itinerary for our round world tour. we remember this period with a lot of nostalgia, those evenings spent adding pins to our world map, dreaming, debating, making compromises and starting to sketch out our travel project.</p>
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