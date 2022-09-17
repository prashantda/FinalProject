import React,{useEffect, useState} from 'react' 
import {useParams,Link } from "react-router-dom"; 
import axios from "axios"; 
import CustConnection from './ConnectionCustomer/CustConnection'; 
import {  useNavigate } from "react-router-dom";
 
const CEnquiryForm = () => { 
     var token = sessionStorage.getItem('JwtToken')
     const { id } =useParams() 
     let navigate = useNavigate()
   const [supplier,setSupplier] = useState([]) 
   const [name,setName] = useState([]) 
   const [description,setdesc] = useState([]) 
  const [servicetypeid,setServicetypeid]=useState([])

   const saveOrder=(e)=>{ 
     e.preventDefault(); 
const supplierid=supplier.supplierid
     const order={supplierid,servicetypeid,description} 
     CustConnection.setOrder(order).then((response)=>{
      navigate("/ord")
       console.log(response.data) 
     }).catch(error=>{
       console.log(error) 
     }) 
   } 
 
   useEffect(() => { 
      loadUser() 
   },[]) 
 
   const loadUser = async () =>{ 
    const res = axios.get(`http://localhost:8086/api/supplier/getsupplier/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} });

    setSupplier(res.data.supplier) //service name 
     setName(res.data.supplier.serviceType.name) //supplier name 
     setServicetypeid(res.data.supplier.serviceType.id)
     console.log(res)
   } 
 
 
  return ( 
    <div className="container col-5 mt-5 mb-5">         
    <div className='card text-bg-light p-3 '> 
         <form> 
         <h3 className='text-center'>Customer Enquiry</h3><hr></hr> 
             <div className="form-group mb-2"> 
                 <label className="form-label mt-2 offset-3">Supplier Id:</label> 
                 <span class="offset-1" name="supplname"> 
                   {supplier.supplierid} 
                 </span> 
             </div> 
             <div className="form-group mb-2"> 
                 <label className="form-label mt-2 offset-3">Service:</label> 
                 <span class="offset-1">{name}</span> 
                {/* <span class="badge rounded-pill text-bg-warning offset-3" name="servicename">            > 
                    {enquiryDetails.name} 
                 </span> */} 
                 
             </div> 
             <div className="form-group mb-2"> 
                <textarea class="form-control"
                 placeholder="Description" 
                 name="description"
                 value={description} 
                 onChange={(e)=>setdesc(e.target.value)}></textarea> 
             </div> 
             <div class="form-check form-switch"> 
            <input type="checkbox" class="form-check-input mt-1"/> 
            <label>By submitting, I agree to the Terms of Use & Privacy Policy</label> 
        </div> 
            <div className='d-grid gap-2'> 
             <button className="btn btn-success mt-3 rounded-pill" onClick={(e)=>saveOrder(e)}>Send Enquiry</button> 
             </div> 
         </form> 
      
     <Link to={`/card/d/${id}`}><div className='text-center mt-3'><button type="button" class="btn btn-outline-primary">Back to Services</button></div> </Link>
 
</div> 
</div> 
    ) 
  } 
export default CEnquiryForm