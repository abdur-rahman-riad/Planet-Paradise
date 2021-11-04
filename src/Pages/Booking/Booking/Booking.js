import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [bookingInfo, setBookingInfo] = useState([]);
    // const { register, handleSubmit } = useForm();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        // https://polar-hollows-28101.herokuapp.com/
        fetch('https://polar-hollows-28101.herokuapp.com/tourpackages')
            .then(response => response.json())
            .then(data => setBookingInfo(data));
    }, []);
    const bookingPackage = bookingInfo.find((tourPackage) => tourPackage._id === id);

    const onSubmit = data => {
        const key = bookingPackage._id;
        data.key = key;
        axios.post("https://polar-hollows-28101.herokuapp.com/bookings", data)
            .then(res => {
                if (res.data.insertedId) {
                    // alert("Booking Confirmed Successfully");
                    // RESET FORM
                    reset();
                }
            })
    };


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

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-floating mb-2">
                            <input
                                {...register("userName")}
                                defaultValue={user?.displayName}
                                type="text"
                                class="form-control"
                                id="userName"
                                placeholder="Name"
                                readOnly />
                            <label for="userName">Name</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input
                                {...register("userEmail")}
                                defaultValue={user?.email}
                                type="email"
                                class="form-control"
                                id="userEmail"
                                placeholder="Email"
                                readOnly />
                            <label for="userEmail">Email</label>
                        </div>

                        {bookingPackage?.title &&
                            <div class="form-floating mb-2">
                                <input
                                    {...register("packageName")}
                                    defaultValue={bookingPackage?.title}
                                    type="text"
                                    class="form-control"
                                    id="packageName"
                                    placeholder="Package Name"
                                    readOnly />
                                <label for="packageName">Package Name</label>
                            </div>
                        }

                        <div class="form-floating mb-2">
                            <input
                                {...register("address")}
                                type="text"
                                class="form-control"
                                id="address"
                                placeholder="Address"
                                required />
                            <label for="address">Address</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input
                                {...register("phoneNumber")}
                                type="number"
                                class="form-control"
                                id="phoneNumber"
                                placeholder="Phone Number"
                                required />
                            <label for="phoneNumber">Phone Number</label>
                        </div>

                        <input className="btn btn-dark w-100" type="submit" value="Confirm Booking" />
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