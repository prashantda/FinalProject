import React from 'react'
import { useState,useEffect,useParams} from "react";
import { useNavigate} from "react-router-dom";
import Connection from '../Services/Connection';

const AddAdmin = () => {
    let navigate = useNavigate() 
    const [name, setName] = useState('')
    const [adhar, setAdhar] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cnfpassword, setCnfPassword] = useState('')
    //const {id} = useParams();

    const saveAdmin = (e) =>{
        e.preventDefault();
        const newAdmin={name,adhar,email,password,cnfpassword}
        Connection.createAdmin(newAdmin).then((response)=>{
            console.log(response.data)
            navigate.push("/")

        }).catch(error =>{
            console.log(error)
        })
    }  
    // useEffect(()=>{
    //     Connection.getAdminById(id).then((response) =>{
    //         setName(response.data.name)
    //         setAdhar(response.data.adhar)
    //         setEmail(response.data.email)
    //         setPassword(response.data.password)
    //         setCnfPassword(response.data.cnfpassword)
    //     }).catch(error =>{
    //         console.log(error)
    //     })
    // },[])
  return (
    <>   
<div className="container col-8 mt-5 mb-5">
                   
                   <div className='card text-bg-light p-3 '>
                        <form>
                        <h3 className='text-center'>New Admin Registration Form</h3>
                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Name</label>
                                <input type="text" 
                                placeholder="Full Name" 
                                name="name" 
                                value = {name} 
                                onChange = {(e) => setName(e.target.value)}
                                className="form-control rounded-pill mt-2" 
                                required></input>
                            </div>
                            {/* <div className="form-group mb-2">
                                <label className="form-label mt-4">Address</label>
                                <input type="text" 
                                placeholder="Address" 
                                name="address" 
                                className="form-control rounded-pill mt-2" 
                                required></input>
                            </div> */}
                            {/* <div className="form-group mb-2">
                                <label className="form-label mt-4">Zip Code</label>
                                <input type="number" 
                                placeholder="PinCode" 
                                name="pincode" 
                                className="form-control rounded-pill mt-2" 
                                required></input>
                            </div> */}
                            {/* <div className="form-group mb-2">
                                <label className="form-label mt-4">Date Of Birth</label>
                                <input type="date" 
                                placeholder="Enter DOB" 
                                name="dob" 
                                className="form-control rounded-pill mt-2" 
                                required></input>
                            </div> */}
                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Aadhaar Number</label>
                                <input type="number" 
                                placeholder="Aadhaar No." 
                                name="aadhaar" 
                                value = {adhar} 
                                onChange = {(e) => setAdhar(e.target.value)}
                                className="form-control rounded-pill mt-2" 
                                required></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Email</label>
                                <input type="Email" 
                                placeholder="This will be your Username" 
                                name="email" 
                                value = {email} 
                                onChange = {(e) => setEmail(e.target.value)}
                                className="form-control rounded-pill mt-2" 
                                required></input>
                                <label className="small">OTP will be sent on this email</label>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Password</label>
                                <input type="password" placeholder="Enter password" name="password" 
                                 value = {password} 
                                 onChange = {(e) => setPassword(e.target.value)}
                                className="form-control rounded-pill mt-2" 
                                required></input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Confirm Password</label>
                                <input type="password" placeholder="Confirm password" name="cnfpassword" 
                                value = {cnfpassword} 
                                onChange = {(e) => setCnfPassword(e.target.value)}
                                className="form-control rounded-pill mt-2" 
                                required></input>
                            </div>
                           <div className='d-grid gap-2'>
                            <button className="btn btn-primary mt-4 rounded-pill" >Get OTP</button>
                            </div>
                        </form>
                    
                        <div className='d-grid gap-2'>
                            <button className="btn btn-success mt-4 rounded-pill" 
                            onClick={(e) => saveAdmin(e)} >    
                            SignIn</button>
                            </div>
               
            </div>
            </div>
    </>
    )
}

export default AddAdmin