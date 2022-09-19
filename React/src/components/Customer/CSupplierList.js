import React,{useEffect, useState}  from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
// import Connection from '../Services/Connection'
// import CustConnection from './ConnectionCustomer/CustConnection';
import axios from "axios";

const CSupplierList = () => {
    const { id } =useParams()
    const [suppliers,setsuppliers] = useState([])
    const navigate=useNavigate()
    //  useEffect(() => {
    //      CustConnection.getSupplierList(id).then((response)=> {
    //          setsuppliers(response.data.supplierslist)
    //         console.log(response.data)
    //     }).catch(error =>{
    //         console.log(error);
    //     })
    //  },[])

     var token = `${sessionStorage.getItem('JwtToken')}`
     useEffect(() => {
     loadUser()
      },[])

  const loadUser = async () =>{
    const res = await axios.get(`http://localhost:8086/api/supplier/getservicesuppliers/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    setsuppliers(res.data.supplierslist)
    //console.log(res.data.supplierslist)
  }
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

export default CSupplierList