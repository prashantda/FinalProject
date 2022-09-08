import React, { useEffect , useState } from 'react'
import {  Link, useNavigate } from "react-router-dom";
import Connection from '../components/Services/Connection' 
 
const SignIn = () => {
  let navigate=useNavigate()
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
 

  const SaveUser=(e)=>{
    e.preventDefault();
    const user={username,password}
    Connection.getToken(user).then((response)=>{
      console.log(response.data.role);    
      console.log(response.data.token);
      sessionStorage.setItem("JwtToken",response.data.token)  
    if(response.data.role=='ADMIN')
    {
      navigate("/adashboard")
    }
    if(response.data.role=='CUSTOMER')
    {
      navigate("/cdashboard")
    }
    if(response.data.role=='SUPPLIER')
    {
      navigate("/sdashboard")
    }

            
    
  } ).catch(error =>{console.log("Invalid Username or Password")})}
 
  


  return (
    <>



<div className="container col-5 mt-5 mb-5">
          
             
             <div className='card text-bg-light p-3 '>
                  <form>
                  <h3 className='text-center'>SignIn</h3>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Email</label>
                          <input type="text" 
                          placeholder="Enter Username" 
                          name="username" 
                          value={username}
                          onChange={(e)=>SetUsername(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          ></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Password</label>
                          <input type="password" placeholder="Enter password"
                           name="password" 
                           value={password}
                          onChange={(e)=>SetPassword(e.target.value)}
                          className="form-control rounded-pill mt-2" ></input>
                      </div>
                     <div className='d-grid gap-2'>
                      <button className="btn btn-primary mt-4 rounded-pill" 
                      onClick={(e)=>SaveUser(e)}>Submit</button>
                      </div>
                  </form>
              
              <div className='text-center mt-3'><small><a href=''>
                Forgot Password</a></small>
              </div>
         
      </div>
      </div>


    </>
  )
}

export default SignIn
