import React,{useEffect, useState}  from 'react'

import Connection from './Connection'
import {  useNavigate } from "react-router-dom";
import {Link, useParams} from 'react-router-dom'
const OrderList = () => {
    const [orders,setOrders] = useState([])
    let navigate = useNavigate()
   

const GetOrder=(e,status,id)=>{
    if(status=="New")
            navigate(`/newenquiry/${id}`)
    if(status=="Pending")
            navigate(`/pendingorder/${id}`)
     if(status=="Cancalled")
            navigate(`/cancalledorder/${id}`)
    if(status=="Completed")
            navigate(`/completedorder/${id}`)

    }


    useEffect(() => {
        Connection.getSupplierOrders().then((response)=> {
            setOrders(response.data.orderlist)
           console.log(response.data)
       }).catch(error =>{
           console.log(error);
       })
    },[])
  return (
    <div className="container">
      <h2 className="text-center">All Orders</h2>
      <table className="table table-bordered table-striped">
          <thead>
              <th>Order Id</th>
              <th>Status</th>    
              <th>Description</th>
              <th>Actions</th>
          </thead>
          <tbody>
              {
                  orders.map(
                      od =>
                      <tr key={od.orderid}>
                          <td>{od.orderid}</td>
                          <td>{od.status}</td>
                          <td>{od.description}</td>
                          <td>
                              <button className="btn btn-success" type='button' onClick={(e)=>{GetOrder(e,od.status,od.orderid)}} >Details</button>
                          </td>
                          
                      </tr>
                  )
              }
          </tbody>
      </table>
      <Link to={`/sdashboard`}><button className="btn btn-success" >Back To DashBoard</button></Link>
    </div>
    )
}

export default OrderList