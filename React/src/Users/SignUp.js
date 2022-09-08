import React from 'react'

const SignUp = () => {
  return (
    <>

<div className="container col-8 mt-5 mb-5">
                   
             <div className='card text-bg-light p-3 '>
                  <form>
                  <h3 className='text-center'>Customer SignUp Form</h3>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Name</label>
                          <input type="text" 
                          placeholder="Full Name" 
                          name="name" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Address</label>
                          <input type="text" 
                          placeholder="Address" 
                          name="address" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Zip Code</label>
                          <input type="number" 
                          placeholder="PinCode" 
                          name="pincode" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Date Of Birth</label>
                          <input type="date" 
                          placeholder="Enter DOB" 
                          name="dob" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Aadhaar Number</label>
                          <input type="number" 
                          placeholder="Aadhaar No." 
                          name="aadhaar" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Email</label>
                          <input type="Email" 
                          placeholder="This will be your Username" 
                          name="email" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                          <label className="small">OTP will be sent on this email</label>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Password</label>
                          <input type="password" placeholder="Enter password" name="password" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Confirm Password</label>
                          <input type="password" placeholder="Confirm password" name="cnfpassword" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                     <div className='d-grid gap-2'>
                      <button className="btn btn-primary mt-4 rounded-pill" >Get OTP</button>
                      </div>
                  </form>
              
                  <div className='d-grid gap-2'>
                      <button className="btn btn-success mt-4 rounded-pill" >SignIn</button>
                      </div>
         
      </div>
      </div>

    </>
  )
}

export default SignUp
