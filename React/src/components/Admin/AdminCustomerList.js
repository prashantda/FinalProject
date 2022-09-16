import React,{useEffect, useState}  from 'react'
import {Link, useParams} from 'react-router-dom'
import Connection from '../Services/Connection'

const AdminCustomerList = () => {
    const { id } =useParams()
    const [users,setUsers] = useState([])

    useEffect(() => {
        Connection.getCustomerinfo().then((response)=> {
            setUsers(response.data)
           console.log(response.data)
       }).catch(error =>{
           console.log(error);
       })
    },[])
  return (
    <div className="container">
      <h2 className="text-center">Customer's List</h2>
      <table className="table table-bordered table-striped">
          <thead>
              <th>Name</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>Date Of Birth</th>
              <th>Aadhar Card</th>
              <th>Mobile No.</th>
              <th>Username</th>
              <th>Min Charge</th>
              <th>Actions</th>
          </thead>
          <tbody>
              {
                  users.map(
                      user =>
                      <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.address}</td>
                          <td>{user.pincode}</td>
                          <td>{user.dob}</td>
                          <td>{user.aadhaar}</td>
                          <td>{user.mobile}</td>
                          <td>{user.username}</td>
                          <td>{user.charge}</td>
                          <td>
                              <Link className="btn btn-success" to={`c/${user.id}`}>Details</Link>
                          </td>
                          
                      </tr>
                  )
              }
          </tbody>
      </table>
      <Link to={`/adashboard/a/${id}`}><button className="btn btn-success" >Back To DashBoard</button></Link>
    </div>
    )
}

export default AdminCustomerList