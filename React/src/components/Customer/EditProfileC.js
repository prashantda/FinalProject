import React, { Component } from 'react'

export default class EditProfileC extends Component {

    Profile = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
            <div className="container col-6 mt-2">

                <h1>This is profile page</h1>

                <div className='card text-bg-light p-3 '>
                <form>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-3">Name</label>
                            <input type="text" placeholder="Enter Full Name" name="name"
                                className="form-control rounded-pill mt-2" required></input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-3">Address</label>
                            <input type="text" placeholder="Enter Address" name="address"
                                className="form-control rounded-pill mt-2" required></input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-3">Zip Code</label>
                            <input type="number" placeholder="Enter PinCode" name="pincode"
                                className="form-control rounded-pill mt-2" required></input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-3">Date Of Birth</label>
                            <input type="date" placeholder="Enter DOB" name="dob" className="form-control rounded-pill mt-2"
                                required></input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-3">Aadhaar Number</label>
                            <input type="number" placeholder="Enter Aadhaar No." name="aadhaar"
                                className="form-control rounded-pill mt-2" required></input>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-3">Email</label>
                            <input type="Email" placeholder="Enter Email" name="email"
                                className="form-control rounded-pill mt-2" required></input>
                        </div>
                        <div class="mt-5 text-center"><button class="btn btn-success profile-button" type="button">Save Profile</button>
                        <button class="btn btn-primary profile-button ms-2" type="button">Edit Profile</button></div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}