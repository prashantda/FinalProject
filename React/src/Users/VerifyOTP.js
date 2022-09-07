import React, { useEffect , useState } from 'react'
import {  Link, useNavigate,useParams } from "react-router-dom";
import Connection from '../components/Services/Connection' 
 
const VerifyOTP = () => {
  let history=useNavigate()
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
 
  const SaveUser=(e)=>{
    e.preventDefault();
    const user={username,password}
    Connection.getToken(user).then((response)=>{
      console.log(response.data);
    
  } ).catch(error =>{console.log("Invalid Otp")})}
 
  


  return (
    <>



<div className="container col-5 mt-5 mb-5">
          
             
             <div className='card text-bg-light p-3 '>
                  <form>
                  <h3 className='text-center'>Verify OTP</h3>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Enter OTP</label>
                          <input type="number" 
                          placeholder="Enter OTP" 
                          name="otp" 
                          //value={otp}
                          //onChange={(e)=>SetUsername(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          ></input>
                      </div>
                     
                     <div className='d-grid gap-2'>
                      <button className="btn btn-primary mt-4 rounded-pill" 
                      >Verify</button>
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

export default VerifyOTP
