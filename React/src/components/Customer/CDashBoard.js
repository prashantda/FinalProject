import React,{useEffect, useState}  from 'react'
// import Connection from '../Services/Connection'
import { Link, useParams } from "react-router-dom";
import CustConnection from '../../components/Customer/ConnectionCustomer/CustConnection'
import axios from "axios";



const CDashBoard = () => {
    const [suppl,setSupplier] = useState([])

    var token = `${sessionStorage.getItem('JwtToken')}`

    useEffect(() => {
         const getsupp=async ()=>{
             const res = await axios.get('http://localhost:8086/api/supplier/getservices',{ headers: {"Authorization" : `Bearer ${token}`} });
             const getdata = await res.data.servicelist;
             setSupplier(getdata);  
             console.log(getdata); 
            }
            getsupp();
    },[]);

  
    
  return (
    //   <div>
    //       {
    //           suppl.map((rowdata)=>
    //           <div>
    //               {
    //                   (typeof(rowdata.servicelist)=='object')?
    //                   <div>
    //                       {
    //                           rowdata.servicelist.map((sub)=>
    //                           <div>
    //                              <h1>{sub.id}</h1> 
    //                               <h1>{sub.name}</h1>
    //                           </div>
    //                           )
    //                       }
    //                   </div>
    //                   :
    //                   null
    //               }
    //           </div>)
    //       }
    //   </div>

    // <div>{renderedPost}</div>
    <div>
      <h1>Hii</h1>
    </div>
        
    // <div className="container">
    //   <h2 className="text-center">Supplier's List</h2>
    //   <table className="table table-bordered table-striped">
    //       <thead>
    //           <th>Supplier Id</th>
    //           <th>Supplier Name</th>
    //           <th>Mobile</th>
    //           <th>Supplier Email-Id</th>
    //           <th>Actions</th>
    //       </thead>
    //       {/* <tbody> */}
    //           {
    //              suppl.map(
    //                   sup =>
    //                   <tbody>
    //                   <tr key={sup.id}>
    //                       <td>{sup.id}</td>
    //                       <td>{sup.firstName}</td>
    //                       <td>{sup.lastName}</td>
    //                       <td>{sup.emailId}</td>
    //                       <td>
    //                           <Link to={`d/${sup.id}`}><button className="btn btn-success" >Details</button></Link>
    //                       </td>
                          
    //                   </tr>
    //                   </tbody>
    //               )
    //           }
    //       {/* </tbody> */}
    //   </table>
    //   <Link to={`/adashboard/a/${id}`}><button className="btn btn-success" >Back To DashBoard</button></Link>
    // </div>
    )
}

export default CDashBoard