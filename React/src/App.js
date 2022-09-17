import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/Shared/NavBar';
import {Banner} from './components/Shared/Banner';
import {Skills} from './components/Shared/Skills';
import {Projects} from './components/Shared/Projects';
import {Footer} from './components/Shared/Footer';
import Home from './components/Shared/Home';

import {Routes,Route } from "react-router-dom";
import JoinUs from './Users/JoinUs';
import SignIn from './Users/SignIn';
import SignUp from './Users/SignUp';
import ContactUs from './Users/ContactUs';
import VerifyOtp from './Users/VerifyOTP';
import NewPassword from './Users/NewPassword';
import Card from './Users/Card';


import SDashBoard from './components/Supplier/SDashboardCards';
import SProfile from './components/Supplier/SProfile';
import SEditProfile from './components/Supplier/SEditProfile';
import {SupplierNav} from './components/Supplier/SupplierNav';
import OrdersS from './components/Supplier/OrderList';
import  NewEnquiryS from './components/Supplier/SNewEnquiry'
import  PendingOrderS from './components/Supplier/SPendingOrder'
import  CancalledOrderS from './components/Supplier/SCancalledOrder'
import  CompletedOrderS from './components/Supplier/SCompletedOrder'
import  SCustomerDetails from './components/Supplier/SCustomerDetails'


import AdminProfile from './components/Admin/AdminProfile';
import AdminCustomerList from './components/Admin/AdminCustomerList';
import AdminSupplierList from './components/Admin/AdminSupplierList';
import AEditProfile from './components/Admin/AEditProfile';
import AdminList from './components/Admin/AdminList';
import OrderList from './components/Admin/OrderList';
import OrderDetails from './components/Admin/OrderDetails';
import SupplierDetails from './components/Admin/SupplierDetails';
import CustomerDetails from './components/Admin/CustomerDetails';
import {AdminNav} from './components/Admin/AdminNav';
import ADashBoard from './components/Admin/ADashboardCards';


// import CDashBoard from './components/Customer/CDashBoard'
import EditProfileC from './components/Customer/CEditProfile'
import CustomerProfile from './components/Customer/ProfileC';
import {CustomerNav} from './components/Customer/CustomerNav';
import CustomerSidebar from './Sidebar/CustomerSidebar'; 
import CSupplierList from './components/Customer/CSupplierList';
import CSupplierDetails from './components/Customer/CSupplierDetails';
import ProfileC from './components/Customer/ProfileC';
import CEnquiryForm from './components/Customer/CEnquiryForm';
import COrderList from './components/Customer/COrderList';
import Sidebar from './Sidebar/Sidebar';






function App() {
  return (
    <>
    <NavBar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/banner" element={<Banner/>}/>
      <Route exact path="/skills" element={<Skills/>}/>
      <Route exact path="/projects" element={<Projects />}/>
      <Route exact path="/joinUs" element={<JoinUs />}/>
      <Route exact path="/signIn" element={<SignIn />}/>
      <Route exact path="/signUp" element={<SignUp />}/>
      <Route exact path="/contactUs" element={<ContactUs/>}/>
      <Route exact path="/verify" element={<VerifyOtp/>}/>
      <Route exact path="/setnewpassword" element={<NewPassword/>}/>

      
      <Route exact path="/adashboard/" element={<ADashBoard/>}/>
      <Route exact path="/adminprofile" element={<AdminProfile/>}/>
      <Route exact path="/editadmin" element={<AEditProfile/>}/>
      <Route exact path="/adminCustomerList" element={<AdminCustomerList/>}/>
      <Route exact path="/adminSupplierList" element={<AdminSupplierList/>}/>               
      <Route exact path="/dashboards" element={<SDashBoard/>}/>
      <Route exact path="/adnav" element={<AdminNav/>}/>
      <Route exact path="/adminList" element={<AdminList/>}/>
      <Route exact path="/OrderList" element={<OrderList/>}/>
      <Route exact path="/OrderList/a/:id" element={<OrderDetails/>}/>
      <Route exact path="/adminSupplierList/a/:id/d/:id" element={<SupplierDetails/>}/>
      <Route exact path="/adminCustomerList/a/:id/c/:id" element={<CustomerDetails/>}/>

      
      
      
      
      
      <Route exact path="/card" element={<Card/>}/>
      
      <Route exact path="/sidebar" element={<Sidebar/>}/>
      <Route exact path="/customersidebar" element={<CustomerSidebar/>}/>
      <Route exact path="/custnav" element={<CustomerNav/>}/>
    
      <Route exact path="/editprofilec" element={<EditProfileC/>}/>
      <Route exact path="/ord" element={<COrderList/>}/>
      <Route exact path="/profilec" element={<CustomerProfile/>}/>
      <Route exact path="/card" element={<Card/>}/>
      <Route exact path="/card/d/:id" element={<CSupplierList/>}/>
      <Route exact path="/card/d/:id/e/:id/e" element={<CSupplierDetails/>}/>
      <Route exact path="/pr" element={<ProfileC/>}/>
      <Route exact path="/card/d/:id/e/:id" element={<CEnquiryForm/>}/>


      <Route exact path="/sdashboard" element={<SDashBoard/>}/>
      <Route exact path="/editprofiles" element={<SEditProfile/>}/>
      <Route exact path="/suppnav" element={<SupplierNav/>}/>
      <Route exact path="/supplierorders" element={<OrdersS/>}/>
      <Route exact path="/profiles" element={<SProfile/>}/>
      <Route exact path="/newenquiry/:id" element={<NewEnquiryS/>}/>
      <Route exact path="/pendingorder/:id" element={<PendingOrderS/>}/>
      <Route exact path="/cancalledorder/:id" element={<CancalledOrderS/>}/>
      <Route exact path="/completedorder/:id" element={<CompletedOrderS/>}/>
      <Route exact path="/orderdetail/:id" element={<SCustomerDetails/>}/>
      </Routes>
      <Footer />
      </>
  );
}

export default App;
