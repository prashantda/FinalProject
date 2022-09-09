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
                      ad =>
                      <tr key={ad.id}>
                          <td>{ad.id}</td>
                          <td>{ad.firstName}</td>
                          {/* <td>{ad.lastName}</td> */}
                          <td>{ad.emailId}</td>
                          <td>
                              <Link className="btn btn-success" to={``}>Details</Link>
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