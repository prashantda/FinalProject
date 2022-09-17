import React, { useEffect, useState } from 'react'
import Connection from './Connection'
 import { Link } from "react-router-dom";

const AdminProfile = () => {
    const [supplier,setSupplier] = useState([])
    const [user,setUser] = useState([])
   
    const [dob,setDOB] = useState([])
    useEffect(() => {
        document.title = "Wish-it || Profile"
       
        Connection.getAdminProfile().then((response)=>{
            console.log(response.data)
            setUser(response.data.user)
   
            setSupplier(response.data.customer)
            setDOB(new Date(response.data.customer.dob).toDateString())
        }).catch(()=>{console.log("Error")})
    },[])
    
    return (
        <div class="col-8 offset-2">
    <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                         alt="" style={{
                            width: 200,
                            height: 250,
                            transform: [
                                { scaleX: 2 }
                            ]
                        }} />
                        
                    </div>
                </div>
                <div class="col-md-6 mt-5">
                    <div class="profile-head">
                        <h5>
                            {user.name}
                        </h5>
                        <h6>
                        {user.username}
                        </h6>
                       
                        <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col-md-2">
                <Link to={`/editadmin`}><button class="btn btn-secondary profile-button ms-2" type="button">Edit</button></Link>
                </div>
            </div>
            <div class="row">
            <div className='offset-4'>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-mb-2">User Id</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{user.id}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{user.name}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{user.mobile}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Aadhaar Number</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{supplier.aadhaar}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Date Of Birth</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{dob}</p>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Address</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{supplier.address}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Zip Code</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{supplier.pincode}</p>
                                </div>
                            </div>
                            
                         
                            
                            <hr></hr>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
        </form>
        </div>
        </div>

            )
}
export default AdminProfile


// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from 'react'
// import Connection from './Connection'

// const SProfile = ()=> {

//     const [supplier,setSupplier] = useState([])
//     const [user,setUser] = useState([])
//     useEffect(() => {
//         document.title = "Wish-it || Profile"
       
//         Connection.getSupplierProfile().then((response)=>{
//             console.log(response.data)
//             setUser(response.data.user)
//             setSupplier(response.data.supplier)
//         }).catch(()=>{console.log("Error")})
//     },[])
   

    
//         return (
           










//     )
    
// }
// export default SProfile 

// import React,{useEffect, useState} from 'react'
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// const AdminProfile = () => {
//   const { id } =useParams()
//   const [admin,setAdmin] = useState([])

//   useEffect(() => {
//      loadUser()
//   },[])

//   const loadUser = async () =>{
//     const res = await axios.get(`http://localhost:8080/api/v1/employees/${id}`);
//     setAdmin(res.data)
//   }

//   return (
//     <div class="col-7 offset-3">
//     <div class="container emp-profile">
//         <form method="post">
//             <div class="row">
//                 <div class="col-md-4">
//                     <div class="profile-img">
//                         <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
//                          alt="" style={{
//                             width: 200,
//                             height: 200,
//                             transform: [
//                                 { scaleX: 2 }
//                             ]
//                         }} />
//                         {/* <div class="file btn btn-lg btn-primary">
//                             Change Photo
//                             <input type="file" name="file" />
//                         </div> */}
//                     </div>
//                 </div>
//                 <div class="col-md-6 mt-5">
//                     <div class="profile-head">
//                         <h5>
//                         {admin.firstName}
//                         </h5>
//                         <h6>
//                         {admin.emailId}
//                         </h6>
                       
//                         <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
//                             <li class="nav-item">
//                                 <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//                 <div class="col-md-2">
//                     <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit" />
//                 </div>
//             </div>
//             <div class="row">
//             <div className='offset-4'>
//                 <div class="col-md-8">
//                     <div class="tab-content profile-tab" id="myTabContent">
//                         <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
//                             <div class="row">
//                                 <div class="col-md-6">
//                                     <label class="col-mb-2">User Id</label>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <p>kshirsagarkunal72</p>
//                                     <p>{admin.userId}</p>
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="col-md-6">
//                                     <label>Name</label>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <p>Kunal Kshirsagar</p>
//                                     <p>{admin.name}</p>
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="col-md-6">
//                                     <label>Email</label>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <p>{admin.emailId}</p>
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="col-md-6">
//                                     <label>Phone</label>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <p>8237251602</p>
//                                     <p>{admin.phone}</p>
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="col-md-6">
//                                     <label>Adhar Number</label>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <p>494897599716</p>
//                                     <p>{admin.adhar}</p>
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="col-md-6">
//                                     <label>Date Of Birth</label>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <p>25/07/1995</p>
//                                     <p>{admin.DOB}</p>
//                                 </div>
//                             </div>
                            
//                             <div class="row">
//                                 <div class="col-md-6">
//                                     <label>Address</label>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <p>Sr No 265 Sant Garden Link Road Chinchwad Pune-411033</p>
//                                     <p>{admin.address}</p>
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="col-md-6">
//                                     <label>Zip Code</label>
//                                 </div>
//                                 <div class="col-md-6">
//                                     <p>411033</p>
//                                     <p>{admin.zipcode}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//         </form>
//         </div>
//         </div>

//     )
// }

// export default AdminProfile