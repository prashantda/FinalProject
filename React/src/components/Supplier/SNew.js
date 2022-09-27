import React,{useEffect, useState}  from 'react'

import Connection from './Connection'
import {  useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'


const  SNew = () => {
    const [orders,setOrders] = useState([])
    let navigate = useNavigate()
   

const GetOrder=(e,status,id)=>{
    if(status==="New")
            navigate(`/s/newenquiry/${id}`)
    if(status==="Pending")
            navigate(`/s/pendingorder/${id}`)
     if(status==="Cancelled")
            navigate(`/s/cancalledorder/${id}`)
    if(status==="Completed")
            navigate(`/s/completedorder/${id}`)
    }


    useEffect(() => {
        document.title = "Wish-it || Orders"
        Connection.getSupplierOrders().then((response)=> {
                setOrders(response.data.orderlist)
           console.log(response.data.orderlist)
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
      <Link to={`/s/sdashboard`}><button className="btn btn-success" >Back To DashBoard</button></Link>
    </div>
    
    )
}

export default SNew