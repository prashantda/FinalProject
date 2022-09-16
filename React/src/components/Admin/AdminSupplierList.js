import React,{useEffect, useState}  from 'react'
// import Connection from '../Services/Connection'
import { Link, useParams } from "react-router-dom";
import CustConnection from '../../components/Customer/ConnectionCustomer/CustConnection'
import axios from "axios";



const AdminSupplierList = () => {
    const [suppl,setSupplier] = useState([])

    var token = `${sessionStorage.getItem('JwtToken')}`

    useEffect(() => {
         const getsupp=async ()=>{
             const res = await axios.get('http://localhost:8086/api/supplier/getservices',{ headers: {"Authorization" : `Bearer ${token}`} });
             const getdata = await res.data;
             setSupplier(getdata);  
             console.log(getdata); 
            }
            getsupp();
    },[]);

    // const userobj =suppl.map(([id,name]) =>{
    //   return {id,name};
    // });

    // console.log(userobj);

    //other

    const renderedPost =Object.keys(suppl).map((post)=>{
      return (
        <div key={post.customer.servicelist.id}>
        <h3>{post.customer.servicelist[0].name}</h3>
        </div>
      );
    });

      //  Object.values(suppl).map(x=>console.log(x))
    // suppl.map((x)=>console.log(x.customer.servicelist.name))
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

    <div>{renderedPost}</div>
        
    )
}

export default AdminSupplierList