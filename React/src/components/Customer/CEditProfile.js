
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from "react-router-dom";
import Connection from '../../components/Services/Connection'

const validate = (custData) => {
    const errors = {}
    let pattern1 = /^([a-zA-Z ]+)$/
    let pattern2 = /^([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})$/
    let pattern3 = /^([0-9]{12})$/
    let pattern4 = /^([0-9]{10})$/
    let pattern5 = /^[a-z0-9._%]+@[a-z0-9.-]+.[a-z]{3}$/

    if (!custData.name)
        errors.name = "Name is Required!"
    else if (!pattern1.test(custData.name))
        errors.name = "Alphabets Only"

    if (!custData.address)
        errors.address = "Address is Required!"

    if (custData.pincode.length == 0)
        errors.pincode = "PinCode required!"
    else if (!pattern2.test(custData.pincode))
        errors.pincode = "Numbers upto 6-Digits Only!"

    if (!custData.dob)
        errors.dob = 'Date Of Birth Required!'

    if (custData.aadhaar.length == 0)
        errors.aadhaar = "Adhard Number required"
    else if (!pattern3.test(custData.aadhaar))
        errors.aadhaar = "Numbers upto 12-Digits Only!"

    if (custData.mobile.length == 0)
        errors.mobile = "Mobile Number required!"
    else if (!pattern4.test(custData.mobile))
        errors.mobile = "Numbers upto 10-Digits Only!"

    return errors
}

const CEditProfile = () => {
    useEffect(() => {
        document.title = "Wish-it || Edit Profile"
    })

    let navigate = useNavigate()


    const SaveUser = (e) => {
        let name = formik.values.name;
        let address = formik.values.address;
        let pincode = formik.values.pincode;
        let dob = formik.values.dob;
        let aadhaar = formik.values.aadhaar;
        let mobile = formik.values.mobile;


        const customer = { name, address, pincode, dob, aadhaar, mobile }
        Connection.saveCustomer(customer).then((response) => {
            if (response.data.userid != 0) {

                const tok = response.data.token;
                navigate('/verify',
                    {
                        state: {
                            token: tok,
                        }
                    });
            }

        }).catch(error => { navigate("/") })
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            pincode: '',
            dob: '',
            aadhaar: '',
            mobile: ''
        },
        validateOnBlur: true,
        validate: validate,
        onSubmit: () => {
            alert("You are now subscribed.")
            SaveUser()
        }
    })


    return (
        <>
            <div>
                <div className="container col-8 mt-2">
                    <div className='card text-bg-light p-3 '>
                        <form
                            onSubmit={formik.handleSubmit}
                        >
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="offset-5">Edit Customer Profile</h4>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-3">Name</label>
                                <input type="text" placeholder="Enter Full Name" name="name"
                                    className="form-control rounded-pill mt-2"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></input>
                                {formik.touched.name && formik.errors.name ?
                                    <span className="text-danger">
                                        {formik.errors.name}</span> : null}

                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-3">Address</label>
                                <input type="text" placeholder="Enter Address" name="address"
                                    className="form-control rounded-pill mt-2"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></input>
                                {formik.touched.address && formik.errors.address ?
                                    <span className="text-danger">
                                        {formik.errors.address}</span> : null}

                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-3">PinCode</label>
                                <input type="number" placeholder="Enter PinCode" name="pincode"
                                    className="form-control rounded-pill mt-2"
                                    value={formik.values.pincode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></input>
                                {formik.touched.pincode && formik.errors.pincode ?
                                    <span className="text-danger">
                                        {formik.errors.pincode}</span> : null}

                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-3">Mobile_No</label>
                                <input type="number"
                                    placeholder="Enter Mobile No"
                                    name="mobile"
                                    className="form-control rounded-pill mt-2"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></input>
                                {formik.touched.mobile && formik.errors.mobile ?
                                    <span className="text-danger">
                                        {formik.errors.mobile}</span> : null}

                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-3">Date Of Birth</label>
                                <input type="date" placeholder="Enter DOB" name="dob" className="form-control rounded-pill mt-2"
                                    value={formik.values.dob}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></input>
                                {formik.touched.dob && formik.errors.dob ?
                                    <span className="text-danger">
                                        {formik.errors.dob}</span> : null}

                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-3">Aadhaar Number</label>
                                <input type="number" placeholder="Enter Aadhaar No." name="aadhaar"
                                    className="form-control rounded-pill mt-2"
                                    value={formik.values.aadhaar}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></input>
                                {formik.touched.aadhaar && formik.errors.aadhaar ?
                                    <span className="text-danger">
                                        {formik.errors.aadhaar}</span> : null}
                            </div>
                            <div className='d-grid gap-2'>
                                <button className="btn btn-success col-4 rounded-pill mt-2 offset-4 "
                                    type="submit" >Save Profile</button><br></br>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}
export default CEditProfile
