import React,{useEffect, useState}  from 'react'

import {  useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import CustConnection from './ConnectionCustomer/CustConnection';

const  SPending = () => {
    const [orders,setOrders] = useState([])
    let navigate = useNavigate()
   

    const GetOrder=(e,status,id)=>{
        if(status=="New")
                navigate(`/c/newenquiryc/${id}`)
        if(status=="Pending")
                navigate(`/c/pendingorderc/${id}`)
         if(status=="Cancelled")
                navigate(`/c/cancalledorderc/${id}`)
        if(status=="Completed")
                navigate(`/c/completedorderc/${id}`)
    
        }


    useEffect(() => {
        document.title = "Wish-it || Orders"
        CustConnection.getOrder().then((response)=> {
                setOrders(response.data.customer.orders)
           console.log(response.data.customer.orders)
       }).catch(error =>{
           alert(error);
       })
    },[])

    const sdet=orders.filter(sd =>
        sd.status === 'New');

  return (
    <div className="container">
      <h2 className="text-center">New Orders</h2>
      <table className="table table-bordered table-striped">
          <thead>
              <th>Order Id</th>
              <th>Status</th>    
              <th>Description</th>
              <th>Actions</th>
          </thead>
          <tbody>
              {
                  sdet.map(
                      sd =>
                      <tr key={sd.orderid}>
                          <td>{sd.orderid}</td>
                          <td>{sd.status}</td>
                          <td>{sd.description}</td>
                          <td>
                              <button className="btn btn-success" type='button' onClick={(e)=>{GetOrder(e,sd.status,sd.orderid)}} >Details</button>
                          </td>
                          
                      </tr> 
                  )
              }
          </tbody>
      </table>
      <Link to={`/c/card`}><button className="btn btn-success mb-5" >Back To DashBoard</button></Link>
    </div>
    
    )
}

export default SPending