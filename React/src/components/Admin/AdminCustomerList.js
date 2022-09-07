import React,{useEffect, useState}  from 'react'
import {Link} from 'react-router-dom'
import Connection from '../Services/Connection'

const AdminCustomerList = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        Connection.getAllUsers().then((response)=> {
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
              <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email-Id</th>
              <th>Actions</th>
          </thead>
          <tbody>
              {
                  users.map(
                      user =>
                      <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.emailId}</td>
                          <td>
                              <Link className="btn btn-info" to={`/edit-employee/${user.id}`}>Details</Link>
                          </td>
                          
                      </tr>
                  )
              }
          </tbody>
      </table>
    </div>
    )
}

export default AdminCustomerList