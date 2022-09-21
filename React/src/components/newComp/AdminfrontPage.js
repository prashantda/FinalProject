import React from 'react' 
import {Route, Routes } from 'react-router-dom'
import { AdminNav } from '../Admin/AdminNav';

import AdminProfile from '../Admin/AdminProfile';
import AdminCustomerList from '../Admin/AdminCustomerList';
import AdminSupplierList from '../Admin/AdminSupplierList';
import AEditProfile from '../Admin/AEditProfile';
import AdminList from '../Admin/AdminList';
import OrderList from '../Admin/OrderList';
import OrderDetails from '../Admin/OrderDetails';
import SupplierDetails from '../Admin/SupplierDetails';
import CustomerDetails from '../Admin/CustomerDetails';
import ADashBoard from '../Admin/ADashboardCards';
import AdminDetails from '../Admin/AdminDetail'
import SidebarA from '../Admin/Sidebar';
import {Footer} from '../Shared/Footer';
import ChangePassword from '../Shared/ChangePassword'

import ContactUs from '../Shared/ContactUs';


 
const SupplierfrontPage= ()=>{
  return ( 
    <div>         
    <div className="container11">
  <div className="header1"><AdminNav/></div>
  <div className="sidebar1"><SidebarA/></div>
  <div className="footer1"><Footer/></div>
  <div className="content1">
       <Routes>
       <Route exact path="adashboard" element={<ADashBoard/>}/>
      <Route exact path="adminprofile" element={<AdminProfile/>}/>
      <Route exact path="editadmin" element={<AEditProfile/>}/>
      <Route exact path="customerslist" element={<AdminCustomerList/>}/>
      <Route exact path="customerdetail/:id" element={<CustomerDetails/>}/>
      <Route exact path="supplierlist" element={<AdminSupplierList/>}/>             
      <Route exact path="supplierdetail/:id" element={<SupplierDetails/>}/>
      <Route exact path="adminlist" element={<AdminList/>}/>
      <Route exact path="admindetail/:id" element={<AdminDetails/>}/>
      <Route exact path="orderlist" element={<OrderList/>}/>
      <Route exact path="orderdetails/:id" element={<OrderDetails/>}/>
      <Route exact path="changepassword" element={<ChangePassword/>}/>
     
      <Route exact path="contactUs" element={<ContactUs/>}/>
       </Routes>
      </div>
   </div>             
   </div> 
    ) 
  } 
export default SupplierfrontPage