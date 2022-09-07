import React, { useEffect , useState } from 'react'
import {  Link, useNavigate,useParams } from "react-router-dom";
import Connection from '../components/Services/Connection' 
 
const NewPassword = () => {
  let history=useNavigate()
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
 
  const SaveUser=(e)=>{
    e.preventDefault();
    const user={username,password}
    Connection.getToken(user).then((response)=>{
      console.log(response.data);
    
  } ).catch(error =>{console.log("Something Went Wrong")})}
 
  


  return (
    <>



<div className="container col-5 mt-5 mb-5">
          
             
             <div className='card text-bg-light p-3 '>
                  <form>
                  <h3 className='text-center'>New Password</h3>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Enter Password</label>
                          <input type="password" 
                          placeholder="Enter Password" 
                          name="password" 
                          //value={otp}
                          //onChange={(e)=>SetUsername(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          ></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Confirm Password</label>
                          <input type="text" 
                          placeholder="Confirm Password" 
                          name="cnfpassword" 
                          //value={otp}
                          //onChange={(e)=>SetUsername(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          ></input>
                      </div>
                     <div className='d-grid gap-2'>
                      <button className="btn btn-primary mt-4 rounded-pill" 
                      >Save</button>
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

export default NewPassword
