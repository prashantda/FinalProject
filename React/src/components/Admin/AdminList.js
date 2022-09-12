import React,{useEffect, useState}  from 'react'
import {Link, useParams} from 'react-router-dom'
import Connection from '../Services/Connection'

const AdminList = () => {
    const { id } =useParams()
    const [admins,setAdmins] = useState([])

    useEffect(() => {
        Connection.getAllUsers().then((response)=> {
            setAdmins(response.data)
           console.log(response.data)
       }).catch(error =>{
           console.log(error);
       })
    },[])
  return (
    <div className="container">
      <h2 className="text-center">Admin's List</h2>
      <table className="table table-bordered table-striped">
          <thead>
              <th>Admin Id</th>
              <th>Admin Name</th>
              {/* <th>Employee Last Name</th> */}
              <th>Admin Email-Id</th>
              <th>Actions</th>
          </thead>
          <tbody>
              {
                  admins.map(
                      ad =>
                      <tr key={ad.id}>
                          <td>{ad.id}</td>
                          <td>{ad.firstName}</td>
                          {/* <td>{ad.lastName}</td> */}
                          <td>{ad.emailId}</td>
                          <td>
                              <Link className="btn btn-success" to={`a/${ad.id}`}>Details</Link>
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

export default AdminList