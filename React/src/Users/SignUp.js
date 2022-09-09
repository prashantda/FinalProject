import React, { useEffect , useState } from 'react'
import {  Link, useNavigate } from "react-router-dom";
import Connection from '../components/Services/Connection' 
 
const SignUp = () => {

    let navigate=useNavigate()
    const [name, SetName] = useState('')
    const [address, SetAddress] = useState('')
    const [pincode, SetPincode] = useState('')
    const [dob, SetDob] = useState('')
    const [aadhaar, SetAadhaar] = useState('')
    const [mobile, SetMobile] = useState('')   
    const [password, SetPassword] = useState('')
    const [username, SetUsername] = useState('')
   




    const SaveUser=(e)=>{
        e.preventDefault();
        const customer={name,address,pincode,dob,aadhaar,mobile,username}
        Connection.saveCustomer(customer).then((response)=>{         
        if(response.data.userid!=0)
        {
       
       const tok= response.data.token;
        navigate('/verify',
        {
            state: {
                token: tok,
                 }
        });
        } 
            
      } ).catch(error =>{navigate("/")})}


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
                          value={name}
                          onChange={(e)=>SetName(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Address</label>
                          <input type="text" 
                          placeholder="Address" 
                          name="address" 
                          value={address}
                          onChange={(e)=>SetAddress(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Zip Code</label>
                          <input type="number" 
                          placeholder="PinCode" 
                          name="pincode" 
                          value={pincode}
                          onChange={(e)=>SetPincode(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Date Of Birth</label>
                          <input type="date" 
                          placeholder="Enter DOB" 
                          name="dob" 
                          value={dob}
                          onChange={(e)=>SetDob(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Aadhaar Number</label>
                          <input type="number" 
                          placeholder="Aadhaar No." 
                          name="aadhaar"
                          value={aadhaar}
                          onChange={(e)=>SetAadhaar(e.target.value)} 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Mobile No.</label>
                          <input type="number" 
                          placeholder="Enter Mobile" 
                          name="mobile"
                          value={mobile}
                          onChange={(e)=>SetMobile(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Email</label>
                          <input type="Email" 
                          placeholder="This will be your Username" 
                          name="username"
                          value={username}
                          onChange={(e)=>SetUsername(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                          <label className="small">OTP will be sent on this email</label>
                      </div>
                      {/* <div className="form-group mb-2">
                          <label className="form-label mt-4">Password</label>
                          <input type="password" placeholder="Enter password" 
                          name="password" 
                          value={password}
                          onChange={(e)=>SetPassword(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Confirm Password</label>
                          <input type="password" placeholder="Confirm password" 
                          name="cnfpassword" 
                          value={cnfpassword}
                          onChange={(e)=>SetConfirmPassword(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div> */}
                     <div className='d-grid gap-2'>
                      <button className="btn btn-primary mt-4 rounded-pill" onClick={(e)=>SaveUser(e)}>Get OTP</button>
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
