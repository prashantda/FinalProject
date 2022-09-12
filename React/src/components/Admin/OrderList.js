import React,{useEffect, useState}  from 'react'
import {Link} from 'react-router-dom'
import Connection from '../Services/Connection'

const OrderList = () => {
    const [orders,setOrders] = useState([])

    useEffect(() => {
        Connection.getAllUsers().then((response)=> {
            setOrders(response.data)
           console.log(response.data)
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
              <th>Customer Name</th>
              {/* <th>Employee Last Name</th> */}
              <th>Supplier Name</th>
              <th>Actions</th>
          </thead>
          <tbody>
              {
                  orders.map(
                      od =>
                      <tr key={od.id}>
                          <td>{od.id}</td>
                          <td>{od.firstName}</td>
                          {/* <td>{od.lastName}</td> */}
                          <td>{od.emailId}</td>
                          <td>
                              <Link className="btn btn-success" to={`a/${od.id}`}>Details</Link>
                          </td>
                          
                      </tr>
                  )
              }
          </tbody>
      </table>
      <Link to={`/adashboard`}><button className="btn btn-success" >Back To DashBoard</button></Link>
    </div>
    )
}

export default OrderList