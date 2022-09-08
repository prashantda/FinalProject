import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/Shared/NavBar';
import {Banner} from './components/Shared/Banner';
import {Skills} from './components/Shared/Skills';
import {Projects} from './components/Shared/Projects';
import {Footer} from './components/Shared/Footer';
import {Routes,Route } from "react-router-dom";
import JoinUs from './Users/JoinUs';
import SignIn from './Users/SignIn';
import SignUp from './Users/SignUp';
import ContactUs from './Users/ContactUs';
import VerifyOtp from './Users/VerifyOTP';
import Home from './components/Shared/Home';
import SDashBoard from './components/Supplier/SDashBoard'
import ADashBoard from './components/Admin/ADashBoard'
import CDashBoard from './components/Customer/CDashBoard'
import EditProfileC from './components/Customer/EditProfileC'
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
      <Route exact path="/dashboards" element={<SDashBoard/>}/>
      <Route exact path="/dashboarda" element={<ADashBoard/>}/>
      <Route exact path="/dashboardc" element={<CDashBoard/>}/>
      <Route exact path="/editprofilec" element={<EditProfileC/>}/>
      <Route exact path="/verify" element={<VerifyOtp/>}/>
      </Routes>
      <Footer />
      </>
  );
}

export default App;
