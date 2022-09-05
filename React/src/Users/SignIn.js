import React from 'react'

const SignIn = () => {
  return (
    <>
      
<div className="container col-5">
          
             
             <div className='card text-bg-light p-3 '>
                  <form>
                 
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Email</label>
                          <input type="text" 
                          placeholder="Enter Username" 
                          name="username" 
                          className="form-control rounded-pill mt-2" 
                          ></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Password</label>
                          <input type="password" placeholder="Enter password" name="password" 
                          className="form-control rounded-pill mt-2" ></input>
                      </div>
                     <div className='d-grid gap-2'>
                      <button className="btn btn-primary mt-4 rounded-pill" >Submit</button>
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
