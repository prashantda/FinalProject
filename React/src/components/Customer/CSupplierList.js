import React,{useEffect, useState}  from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from "axios";

const CSupplierList = () => {
    const { id } =useParams()
    const [suppliers,setsuppliers] = useState([])
    const navigate=useNavigate()


     var token = `${sessionStorage.getItem('JwtToken')}`
     useEffect(() => {
        sessionStorage.setItem("ServiceId",id)
     loadUser()
      },[])

  const loadUser = async () =>{
    const res = await axios.get(`http://localhost:8084/api/supplier/getservicesuppliers/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    setsuppliers(res.data.supplierslist)
    //console.log(res.data.supplierslist)
  }
 const Enquiry=(e,id)=>{
    navigate(`/c/enquiry/${id}`)
 }

  return (
    <div className="container">
      <h2 className="text-center">Supplier's List</h2>
      
              {
                  suppliers.map(
                      sp =>
                    //   <tr key={sp.supplierid}>
                    //       <td>{sp.supplierid}</td>
                    //       <td>{sp.serviceType.name}</td>
                    //       <td>{sp.charge}</td>
                    //       <td>
                    //           <button className="btn btn-success" onClick={e=>{Enquiry(e,sp.supplierid)}}>Details</button>
                    //       </td>
                         
                    //   </tr>

<div class="container-fluid mt-5 ">
        <div class="supplier-card-group">
            <div class="card col-2 m-2  mb-5">
                <div class="card-header">
                    <h5 class="card-title">Supplier Id    {sp.supplierid}</h5>
                </div>
                <div class="card-body">
                    <p class="supplier-card-text">
                      Charge {sp.charge}<br/>
                      PinCode  {sp.pincode}
                    </p>
                   
                </div>
                <div class="card-footer">
                    <input name="" id="" class="btn offset-3 btn-primary" type="button" value="Enquiry"/>
                </div>
            </div>

            </div>
        </div>
                  )
              }
          
      
    </div>
    )
}

export default CSupplierList