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


import SDashBoard from './components/Supplier/SDashBoard';
import SProfile from './components/Supplier/SProfile';
import SEditProfile from './components/Supplier/SEditProfile';
import ADashBoard from './components/Admin/ADashBoard';
import {SupplierNav} from './components/Supplier/SupplierNav';

import AdminProfile from './components/Admin/AdminProfile';
import AdminCustomerList from './components/Admin/AdminCustomerList';
import AdminSupplierList from './components/Admin/AdminSupplierList';
import AddAdmin from './components/Admin/AddAdmin';
import AdminList from './components/Admin/AdminList';
import OrderList from './components/Admin/OrderList';
import OrderDetails from './components/Admin/OrderDetails';
import SupplierDetails from './components/Admin/SupplierDetails';
import CustomerDetails from './components/Admin/CustomerDetails';
import {AdminNav} from './components/Admin/AdminNav';


import CDashBoard from './components/Customer/CDashBoard'
import EditProfileC from './components/Customer/CEditProfile'
import CustomerProfile from './components/Customer/ProfileC';
import {CustomerNav} from './components/Customer/CustomerNav';
import CustomerSidebar from './Sidebar/CustomerSidebar'; 



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
      <Route exact path="/adashboard/a/:id" element={<ADashBoard/>}/>
      <Route exact path="/adminList/c/:id/a/:id" element={<AdminProfile/>}/>
      <Route exact path="/adminCustomerList" element={<AdminCustomerList/>}/>
      <Route exact path="/adminCustomerList/a/:id" element={<AdminCustomerList/>}/>
      <Route exact path="/adminSupplierList" element={<AdminSupplierList/>}/>
      <Route exact path="/adminSupplierList/a/:id" element={<AdminSupplierList/>}/>
      <Route exact path="/Addadmin" element={<AddAdmin/>}/>
      <Route exact path="/editadmin/:id" element={<AddAdmin/>}/>
      <Route exact path="/dashboards" element={<SDashBoard/>}/>
      <Route exact path="/adnav" element={<AdminNav/>}/>
      <Route exact path="/adminList" element={<AdminList/>}/>
      <Route exact path="/OrderList" element={<OrderList/>}/>
      <Route exact path="/adminList/c/:id" element={<AdminList/>}/>
      <Route exact path="/OrderList/a/:id" element={<OrderList/>}/>
      <Route exact path="/OrderList/a/:id" element={<OrderDetails/>}/>
      <Route exact path="/adminSupplierList/a/:id/d/:id" element={<SupplierDetails/>}/>
      <Route exact path="/adminCustomerList/a/:id/c/:id" element={<CustomerDetails/>}/>

      
      
      
      
      
      <Route exact path="/card" element={<Card/>}/>
      
      <Route exact path="/sidebar" element={<Sidebar/>}/>
      <Route exact path="/customersidebar" element={<CustomerSidebar/>}/>
      <Route exact path="/custnav" element={<CustomerNav/>}/>
      <Route exact path="/dashboardc" element={<CDashBoard/>}/>
      <Route exact path="/editprofilec" element={<EditProfileC/>}/>
      <Route exact path="/profilec" element={<CustomerProfile/>}/>



      <Route exact path="/sdashboard" element={<SDashBoard/>}/>
      <Route exact path="/editprofiles" element={<SEditProfile/>}/>
      <Route exact path="/suppnav" element={<SupplierNav/>}/>
    
      <Route exact path="/profiles" element={<SProfile/>}/>
      </Routes>
      <Footer />
      </>
  );
}

export default App;
