import React from 'react'

const JoinUs= () => {
  return (
    

    <div>
      
     <div>
          
<div className="container col-8 mt-5 mb-5">
          
             
<div className='card text-bg-light p-3 '>
                  <form>
                  <h3 className='text-center'>Supplier SignUp Form</h3>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Name</label>
                          <input type="text" 
                          placeholder="Enter Full Name" 
                          name="name" 
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
                          <label className=""><small>OTP will be sent on this email</small></label>
                      </div>

                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Mobile No.</label>
                          <input type="number" 
                          placeholder="Enter Mobile" 
                          name="mobileno" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>

                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Address</label>
                          <input type="text" 
                          placeholder="Enter Address" 
                          name="address" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>

                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Aadhaar Number</label>
                          <input type="number" 
                          placeholder="Enter Aadhaar No." 
                          name="aadhaar" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>

                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Pin Code</label>
                          <input type="number" 
                          placeholder="Enter Pin" 
                          name="pin_code" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                         
                      </div>

                      <div className="form-group mb-2">
                          <label className="form-label mt-4">DOB</label>
                          <input type="date" placeholder="Enter date" name="date" 
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>


                      

                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Service Type</label>&nbsp;&nbsp;

                          <select>
                          <option selected disabled>Select Option</option>
                          <option >Plumbing</option>
                          <option >Electrician</option>
                           <option >Furniture</option>
                          <option >AC/TV Repair</option>
                          <option >Painting</option>
                          <option >Interior Design</option>
                           <option >Furniture</option>
                          <option >Fabrication</option>
                          </select>
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

    </div>
  
    </div>
  )
}

export default JoinUs
