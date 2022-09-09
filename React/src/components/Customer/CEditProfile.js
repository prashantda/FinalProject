import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CEditProfile extends Component {

    Profile = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
            <div className="container col-8 mt-2">
                <div className='card text-bg-light p-3 '>
                <form>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="offset-5">Edit Profile</h4>
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
                          <label className="form-label mt-3">Mobile_No</label>
                          <input type="number" 
                          placeholder="Enter Mobile No" 
                          name="mobileno" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
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
                        <Link to={`/profileC`}><button className="btn btn-success col-4 rounded-pill mt-2 offset-4 "  >Save Profile</button></Link><br></br>
                        <button className="btn rounded-pill mt-5   "  ></button>
                    </form>
                </div>
            </div>
            </div>


        )
    }
}