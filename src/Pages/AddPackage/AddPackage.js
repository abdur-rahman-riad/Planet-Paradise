import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post("http://localhost:5000/tourpackages", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("New Tour Package Successfully Added");

                    // RESET FORM
                }
            })
    };


    return (
        <div className="container text-center my-2 py-2">
            <h3 className="fw-bold text-success">Add a New Tour Package</h3>

            <div className="addPackage-design">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-floating mb-2">
                        <input
                            {...register("title")}
                            type="text"
                            class="form-control"
                            id="title"
                            placeholder="Package Name"
                            required />
                        <label for="title">Package Name</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input
                            {...register("description")}
                            type="text"
                            class="form-control"
                            id="description"
                            placeholder="Short Description"
                            required />
                        <label for="description">Short Description</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input
                            {...register("price")}
                            type="number"
                            class="form-control"
                            id="price"
                            placeholder="Package Price"
                            required />
                        <label for="price">Package Price</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input
                            {...register("duration")}
                            type="text"
                            class="form-control"
                            id="duration"
                            placeholder="Ex: 1 Day 1 Night"
                            required />
                        <label for="duration">Package Duration (Ex: 1 Day 1 Night)</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input
                            {...register("departure")}
                            type="text"
                            class="form-control"
                            id="departure"
                            placeholder="Ex: Dhaka"
                            required />
                        <label for="departure">Departure (Ex: Dhaka)</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input
                            {...register("destination")}
                            type="text"
                            class="form-control"
                            id="destination"
                            placeholder="Ex: Istanbul"
                            required />
                        <label for="destination">Destination (Ex: Istanbul)</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input
                            {...register("img")}
                            type="text"
                            class="form-control"
                            id="img"
                            placeholder="Image URL"
                            required />
                        <label for="img">Image URL</label>
                    </div>

                    <input className="btn btn-dark w-100" type="submit" value="Add Package" />

                    {/* <input {...register("title")} placeholder="Package Name" />
                    <input {...register("description")} placeholder="Short Description" />
                    <input type="number" {...register("price")} placeholder="Package Price" />
                    <input {...register("duration")} placeholder="Duration" />
                    <input {...register("departure")} placeholder="Departure" />
                    <input {...register("destination")} placeholder="Destination" />
                    <input {...register("img")} placeholder="Image URL" /> */}

                </form>
            </div>
        </div>
    );
};

export default AddPackage;