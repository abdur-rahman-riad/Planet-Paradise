import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    const [bookingInfo, setBookingInfo] = useState([]);

    useEffect(() => {
        fetch('/offers.json')
            .then(response => response.json())
            .then(data => setBookingInfo(data));
    }, []);

    const bookingPackage = bookingInfo.find((tourPackage) => tourPackage.id === id);
    // console.log(bookingInfo);


    return (
        <div className="container my-3">
            <h3 className="text-center py-3 fw-bold">Review and Confirm Your Booked Tour Package</h3>

            <div className="row g-5 py-3">
                <div className="col-md-6">
                    <img src={bookingPackage?.img} className="img-fluid img-thumbnail" width="100%" alt="Package Banner" />
                    <h4 className="fw-bold mt-3">{bookingPackage?.title}</h4>
                    <p className="package-description">{bookingPackage?.description}</p>
                    <h3 className="fw-bold text-primary">{bookingPackage?.price} tk</h3>
                    <h5>Duration: {bookingPackage?.duration}</h5>
                    <h5>Departure: {bookingPackage?.departure}</h5>
                    <h5>Destination: {bookingPackage?.destination}</h5>
                </div>

                <div className="col-md-6">
                    <form action="">

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="name" placeholder="Name" />
                            <label for="name">Name</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="email" class="form-control" id="email" placeholder="Email" />
                            <label for="email">Email</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="PackageName" placeholder="Package Name" value={bookingPackage?.title} />
                            <label for="PackageName">Package Name</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="PackagePrice" placeholder="Package Price" value={bookingPackage?.price} />
                            <label for="PackagePrice">Package Price</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="Address" placeholder="Address" />
                            <label for="Address">Address</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input type="number" class="form-control" id="phone" placeholder="Phone Number" />
                            <label for="phone">Phone Number</label>
                        </div>

                        <button className="btn btn-dark w-100">Confirm Booking</button>
                    </form>
                </div>
            </div>

            <div className="text-center">
                <Link to="/">
                    <button className="btn btn-dark my-3">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Booking;