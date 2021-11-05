import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookingList from '../BookingList/BookingList';
import './AllBooking.css';

const AllBooking = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://polar-hollows-28101.herokuapp.com/bookings')
            .then(response => response.json())
            .then(data => setBookings(data))
    }, [bookings]);


    return (
        <div className="container my-3">
            <h3 className="fw-bold text-center text-success fst-italic mb-3">Manage All Booking</h3>

            <div className="row">
                {
                    bookings.map(myBookings => <BookingList
                        key={myBookings._id}
                        myBookings={myBookings}
                    ></BookingList>)
                }
            </div>

            <div className="text-center">
                <Link to="/">
                    <button className="btn btn-dark mt-5">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default AllBooking;