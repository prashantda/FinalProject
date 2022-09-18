import React,{useEffect, useState}  from 'react'
import {Link} from 'react-router-dom'
import Connection from './Connection'

const OrderList = () => {
    const [orders,setOrders] = useState([])

    useEffect(() => {
        Connection.getOrderList().then((response)=> {
            setOrders(response.data.orderlist)
           console.log(response.data.orderlist)
       }).catch(error =>{
           console.log(error);
       })
    },[])
  return (
    <div className="container">
      <h2 className="text-center">Order's List</h2>
      <table className="table table-bordered table-striped">
          <thead>
              <th>Order Id</th>
              <th>Status</th>
              
              <th>ServiceId</th>
              <th>Description</th>
              <th>OrderDate</th>
              <th>SupplierId</th>
          </thead>
          <tbody>
              {
                  orders.map(
                      od =>
                      <tr key={od.orderid}>
                          <td>{od.orderid}</td>
                          <td>{od.status}</td>
                          <td>{od.servicetypeid}</td>
                          <td>{od.description}</td>
                          <td>{new Date(od.orderdate).toDateString()}</td>
                          <td>{od.supplierid}</td>
                          {/* <td>
                              <Link className="btn btn-success" to={`a/${od.id}`}>Details</Link>
                          </td> */}
                          
                      </tr>
                  )
              }
          </tbody>
      </table>
      <Link to={`/adashboard`}><button className="btn btn-success mb-5" >Back To DashBoard</button></Link>
    </div>
    )
}

export default OrderList