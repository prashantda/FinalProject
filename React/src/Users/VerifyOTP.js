import React, { useEffect , useState } from 'react'
import {  Link, useLocation, useNavigate,useParams } from "react-router-dom";
import Connection from '../components/Services/Connection' 
 
const VerifyOTP = () => {
 
 // const [userid, SetUsername] = useState('')
  // const [otp, SetPassword] = useState('')
  // const location=useLocation
  // const user=location.State.userid;
  //console.log(location.useState.userid);
//   const SaveUser=(e)=>{
//      e.preventDefault();
//   //   const user={user,otp}
//   //   Connection.getToken(user).then((response)=>{
//   //     console.log(response.data);
    
//  // } ).catch(error =>{console.log("Invalid Otp")})
//}
 
  


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
                          // name="otp" 
                          // value={location.useState.userid}
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
