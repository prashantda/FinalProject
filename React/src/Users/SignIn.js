import { Field, useFormik } from "formik";
import React, { useContext, useState, useEffect } from "react";
import * as yup from "yup";
 import {  Link, useNavigate } from "react-router-dom";
 import Connection from '../components/Services/Connection'

const validationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),


  
});
//  const validateCustomer=(cdata)=>{
// const errors={}
// let pattern1 = /^[a-z0-9._%]+@[a-z0-9.-]+.[a-z]{3}$/
// let pattern2 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
// if(!cdata.username)
// errors.username="Email_Id is required"
//  else if (!pattern1.test(cdata.username))
//          errors.username = "Use Correct Pattern for Email!"



// if(!cdata.password)
// errors.password="password is required"
// else if (!pattern2.test(cdata.username))
//         errors.username = "Use Correct Pattern for password!"


// return errors

// }

function SignIn(props) {
  useEffect(()=>{
            document.title="Wish-it || SignIn"
           })

  
   let navigate=useNavigate()
   const [username, SetUsername] = useState('')
   const [password, SetPassword] = useState('')
  
   const SaveUser = async (e) => {
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
   } ).catch(error =>{console.log("Invalid Username or Password")})
    
    
  };

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit:SaveUser
  });

  return (
  
 <div className="container col-5 mt-5 mb-5">
          
             
                      <div className='card text-bg-light p-3 '>
                             <form 
                             onSubmit={formik.handleSubmit} 
                             >
                             <h3 className='text-center'>SignIn</h3>
                                 <div className="form-group mb-2">
                                     <label className="form-label mt-4">Email</label>
                                     <input type="text" 
                                    placeholder="Enter Username" 
                                    name="username" 
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2" 
                                    ></input>
                                    {formik.errors.username ? 
                                    <span className="text-danger">
                                    {formik.errors.username}</span> : null}
          
                                </div>
                                 <div className="form-group mb-2">
                                    <label className="form-label mt-4">Password</label>
                                    <input type="password" placeholder="Enter password"
                                     name="password" 
                                     value={formik.values.password}
                                     onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2" ></input>
                                    {formik.errors.password ? 
                                    <span className="text-danger">
                                    {formik.errors.password}</span> : null}
          
                                </div>
                               <div className='d-grid gap-2'>
                                <button className="btn btn-primary mt-4 rounded-pill" 
                                type="submit"
                               
                                >Submit</button>
                                </div>
                            </form>
                        
                        <div className='text-center mt-3'><small><a href=''>
                          Forgot Password</a></small>
                        </div>
                   
                </div>
                </div>
          
     
  );
}





 export default SignIn



