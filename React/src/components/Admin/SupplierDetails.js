import React,{useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SupplierDetails = () => {
    const { id } =useParams()
  const [supplierDetails,setsupplierDetails] = useState([])

  useEffect(() => {
     loadUser()
  },[])

  const loadUser = async () =>{
    const res = await axios.get(`http://localhost:8080/api/v1/employees/${id}`);
    setsupplierDetails(res.data)
  }
    return (
        <div>
        <div>

            <div className="container col-8 mt-5" >


                <div className='card text-bg-light p-1' >
                    <p >
                        <form method="post " className='container-center col-8' > 
                            <div class="row">
                            </div>
                            <div class="row">
                                <div className='offset-4'>
                                    <div class="col-md-8">
                                        <div class="tab-content profile-tab" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <h3 className='text-center'>Supplier_Details</h3><hr></hr>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="col-mb-2">Supplier ID</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{supplierDetails.firstName}</p>
                                                        <p class="text-success">{supplierDetails.supplierId}</p>
                                                    </div>
                                                </div>    
                                            </div>
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label>Supplier's Name</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">Patil123@gmail.com</p>
                                                    <p class="text-success">{supplierDetails.supplierName}</p>
                                                </div>
                                            </div>
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label>Supplier Address</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">Patil Vasati,wadegoan road,sangola</p>
                                                    <p class="text-success">{supplierDetails.supplierAddress}</p>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Pincode</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">i wanted plubing my tank</p>
                                                    <p class="text-success">{supplierDetails.pincode}</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Adhar Card</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">i wanted plubing my tank</p>
                                                    <p class="text-success">{supplierDetails.adharCard}</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Date Of Birth</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">i wanted plubing my tank</p>
                                                    <p class="text-success">{supplierDetails.dateOfBirth}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Expired Status</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <select className='text-success'>
                                                        <option>---Yes/No---</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <label>Enable Status</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <select className='text-success'>
                                                        <option>---Yes/No---</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <label>Lock Status</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <select className='text-success'>
                                                        <option>---Yes/No---</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <label>Credential Status</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <select className='text-success'>
                                                        <option>---Yes/No---</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    <div className='offset-3'>
                        <tr >

                            <button className="btn btn-outline-dark  col-3  mt-3 rounded-pill mb-3 " style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                                backgroundColor: '#16A5A5',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }} >Save</button>

                            
<button className="btn btn-outline-dark col-3  ms-3 mt-3 rounded-pill mb-3" style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                                backgroundColor: '#D33115',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }} >Delete Supplier</button>

                        </tr></div>
                    </p>
                </div>
            </div>

        </div>
        
    </div>


    )
}

export default  SupplierDetails