import React,{useEffect, useState}  from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
// import Connection from '../Services/Connection'
 import CustConnection from './ConnectionCustomer/CustConnection';
import axios from "axios";

const CustomSuppliers = () => {
    const { pincode } =useParams()
    const id=`${sessionStorage.getItem("ServiceId")}`
    
    const [suppliers,setsuppliers] = useState([])
    const navigate=useNavigate()
     useEffect(() => {
        console.log(id)
        CustConnection.CustomSuppliers(id,pincode).then((res)=>{
            setsuppliers(res.data.supplierslist)
        }).catch((err)=>{
    console.log(err)
        })
    
      },[])


 const Enquiry=(e,id)=>{
    navigate(`/enquiry/${id}`)
 }

  return (
    <div className="container">
      <h2 className="text-center">Supplier's List</h2>
      <table className="table table-bordered table-striped">
          <thead>
              <th>Supplier User Id</th>
              <th>Service Type</th>
              <th>Charge</th>
              <th>Actions</th>
          </thead>
          <tbody>
              {
                  suppliers.map(
                      sp =>
                      <tr key={sp.supplierid}>
                          <td>{sp.supplierid}</td>
                          <td>{sp.serviceType.name}</td>
                          <td>{sp.charge}</td>
                          <td>
                              <button className="btn btn-success" onClick={e=>{Enquiry(e,sp.supplierid)}} >Details</button>
                          </td>
                         
                      </tr>
                  )
              }
          </tbody>
      </table>
      
    </div>
    )
}

export default CustomSuppliers