import React from 'react' 
import {Route, Routes } from 'react-router-dom'
import { CustomerNav } from '../Customer/CustomerNav'
import CustomerSidebar from '../Customer/CustomerSidebar'
import { Footer } from '../Shared/Footer'
import EditProfileC from '../Customer/CEditProfile'
import CustomerProfile from '../Customer/ProfileC';
import CSupplierList from '../Customer/CSupplierList';
import CEnquiryForm from '../Customer/CEnquiryForm';
import COrderList from '../Customer/COrderList';
import Card from '../Customer/Card';
import CCancelledOrders from '../Customer/CCancelledOrders';
import CCompletedOrders from '../Customer/CCompletedOrders';
import CCNewOrders from '../Customer/CCNewOrders';
import COrderDettails from '../Customer/COrderDettails';
import CPendingOrder from '../Customer/CPendingOrder'
import CustomSuppliers from '../Customer/CustomSuppliers'
import VerifyOtp from '../Shared/VerifyOTP';
import ChangePassword from '../Shared/ChangePassword'
import NewPassword from '../Shared/NewPassword';
import ContactUs from '../Shared/ContactUs';
 
const CustomerfrontPage= ()=>{
  return ( 
    <div>         
    <div className="container11">
  <div className="header1"><CustomerNav/></div>
  <div className="sidebar1"><CustomerSidebar/></div>
  <div className="footer1"><Footer/></div>
  <div className="content1">
       <Routes>
         <Route exact path="card" element={<Card/>}/>            
         <Route exact path="profilec" element={<CustomerProfile/>}/>  
         <Route exact path="editprofilec" element={<EditProfileC/>}/>
         <Route exact path="ord" element={<COrderList/>}/>   
         <Route exact path="card/d/:id" element={<CSupplierList/>}/>  
         <Route exact path="newenquiryc/:id" element={<CCNewOrders/>}/>       
         <Route exact path="pendingorderc/:id" element={<CPendingOrder/>}/>   
         <Route exact path="completedorderc/:id" element={<CCompletedOrders/>}/>
         <Route exact path="cancalledorderc/:id" element={<CCancelledOrders/>}/>
         <Route exact path="enquiry/:id" element={<CEnquiryForm/>}/>
         <Route exact path="ordDetails/:id" element={<COrderDettails/>}/>
 
         <Route exact path="customsuppliers/:pincode" element={<CustomSuppliers/>}/>

         <Route exact path="verify" element={<VerifyOtp/>}/>
         <Route exact path="setnewpassword" element={<NewPassword/>}/>
         <Route exact path="changepassword" element={<ChangePassword/>}/>
         <Route exact path="contactUs" element={<ContactUs/>}/>
       </Routes>
      </div>
   </div>             
   </div> 
    ) 
  } 
export default CustomerfrontPage