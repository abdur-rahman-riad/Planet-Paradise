import React, { useEffect, useState } from 'react';
import './MyBookingItem.css';

const MyBookingItem = (props) => {
    const [myBookingList, setMyBookingList] = useState([]);
    const { _id, key, packageName, status } = props.bookings;

    useEffect(() => {
        fetch('https://polar-hollows-28101.herokuapp.com/tourpackages')
            .then(response => response.json())
            .then(data => setMyBookingList(data));
    }, []);
    const userBooking = myBookingList.find((packageInfo) => packageInfo._id === key);

    // Delete a Booking
    const deleteMyBooking = id => {
        const proceed = window.confirm("Are you sure, you want to delete this Booking?");
        if (proceed) {
            const url = `https://polar-hollows-28101.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Successfully Deleted Booking. Please Reload Page for Updated Status");

                    }
                })
        }
    }

    return (
        <div className="col-md-6">
            <div className="card mb-3 border shadow-sm">
                <div className="row align-items-center">
                    <div className="col-md-6 custom-mybooking">
                        <img src={userBooking?.img} className="img-fluid rounded-start" width="100%" alt="" />
                    </div>

                    <div className="col-md-6 ps-0 py-2 myBookingP">
                        <h6 className="fw-bold">{packageName}</h6>
                        <h6 className="fw-bold text-secondary">{userBooking?.price} tk</h6>
                        <h6 className="text-secondary">{userBooking?.duration}</h6>
                        <h6 className="text-secondary">{userBooking?.departure} to {userBooking?.destination}</h6>
                        <div className="d-flex align-items-center status-design">
                            <button onClick={() => deleteMyBooking(_id)} className="cancel-btn">Cancel</button>
                            <p className="text-primary fst-italic">{status}</p>
                            {/* <h5 className="text-success fst-italic">Approved</h5> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookingItem;