import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik, Field } from 'formik'
// import { Formik, Form, Field } from 'formik';
import CustConnection from './ConnectionCustomer/CustConnection';
import { Rating } from "@mui/material";


const validate = (supData) => {
    const errors = {}
    if (!supData.feedback)
        errors.feedback = "Please write feedback!"

    if (!supData.rating)
        errors.rating = "Rating Required!"

    return errors
}
function CFeedback() {
    const { id } = useParams()
    useEffect(() => {
        document.title = "Wish-it || Feedback"
    }, [])

    let navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            feedback: '',
            rating: ' '
        },
        validateOnBlur: true,
        validate: validate,
        onSubmit: () => {
            const otp = formik.values.feedback;
            const token = formik.values.rating
            const order = { otp, token }

            

            CustConnection.GiveFeedback(id, order).then((res) => {
                if (res.data != 0) {
                    navigate('/c/ord')
                }
            }).catch((err) => {
                alert(err)
            })

        }
    })


    return (

        <div className="container col-5 mt-5 mb-5">
            <div className='card text-bg-light p-3 '>
                <form
                    onSubmit={formik.handleSubmit}
                >
                    <h3 className='text-center'>Feedback Form</h3>
                    <div className="form-group mb-2">
                        <label className="form-label">OrderId</label>
                        <span class=""

                            name="orderid"
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {id}</span>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">FeedBack</label>
                        <textarea class="form-control"
                            placeholder="Write a Review.."
                            name="feedback"
                            value={formik.values.feedback}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control mt-2 "></textarea>
                        {formik.touched.feedback && formik.errors.feedback ?
                            <span className="text-danger">{formik.errors.feedback}</span>
                            : null}
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-4">Rating</label>&nbsp;&nbsp;
                        
                        <Rating name="rating"
                            id="rating"
                            onChange={formik.handleChange}
                            value={formik.values.rating}
                            precision={1} />

                        {/* </select> */}
                        {formik.touched.rating && formik.errors.rating ?
                            <span className="text-danger">{formik.errors.rating}</span>
                            : null}
                    </div>
                    <div className='d-grid gap-2'>
                        <button className="btn btn-primary mt-4 rounded-pill"
                            type="submit"
                        >Submit</button>
                    </div>
                </form>
                <div className='text-center mt-3'><small><a href=''>
                    Back to dashboard</a></small>
                </div>

            </div>
        </div>


    );
}

export default CFeedback