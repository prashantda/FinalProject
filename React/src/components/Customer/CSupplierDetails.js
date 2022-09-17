import React,{useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CSupplierDetails = () => {

    const { id } =useParams()
  const [supDetails,setsupDetail] = useState([])
  var token = `${sessionStorage.getItem('JwtToken')}`
  useEffect(() => {
     loadUser()
  },[])

  const loadUser = async () =>{
    const res = await axios.get(`http://localhost:8086/api/supplier/getsupplier/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    setsupDetail(res.data.service)
  }

        return (

         <div className="container col-6 mt-5 mb-5">
         <div className='card text-bg-light p-3 '>
             <form>
                 <h3 className='text-center'>Supplier Details</h3><hr></hr>
                 <div className="form-group mb-2">
                     <label className="form-label mt-2">Supplier Name:</label>
                     <span class="offset-1"> {supDetails.name}</span>
                 </div>
                 <div className="form-group mb-2">
                     <label className="form-label mt-2">Service:</label>
                     <span class="badge rounded-pill text-bg-warning offset-3"><h6>{supDetails.name}</h6></span>
                 </div>
                 <div className="form-group mb-2">
                     <label className="form-label mt-2">Supplier Address:</label>
                     <span class="offset-1">{supDetails.address}</span>
                 </div>
                 <div className="form-group mb-2">
                     <label className="form-label mt-2">Supplier Pincode:</label>
                     <span class="offset-1">{supDetails.pincode}</span>
                 </div>
                 <div className="form-group mb-2">
                     <label className="form-label mt-2">Date Of Birth:</label><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <span class="offset-2">{supDetails.dob}</span>
                 </div>
                 <div className='d-grid gap-2'>
                     <tr>
                     <Link to={`/acceptedordersc`}><button className="btn btn-primary col-3 mt-3 rounded-pill offset-4">Back</button></Link>
                     </tr>
                 </div>
             </form>
         </div>
         </div>
         
         
        )
    }

    export default CSupplierDetails