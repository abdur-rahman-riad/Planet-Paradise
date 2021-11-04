import React, { useEffect, useState } from 'react';
import BookingList from '../BookingList/BookingList';
import './AllBooking.css';

const AllBooking = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        // https://polar-hollows-28101.herokuapp.com/
        fetch('https://polar-hollows-28101.herokuapp.com/bookings')
            .then(response => response.json())
            .then(data => setBookings(data))
    }, []);


    return (
        <div className="container my-3">
            <h3 className="fw-bold text-center text-success">Manage All Booking</h3>

            <div className="row">
                {
                    bookings.map(myBookings => <BookingList
                        key={myBookings._id}
                        myBookings={myBookings}
                    ></BookingList>)
                }
            </div>
        </div>
    );
};

export default AllBooking;