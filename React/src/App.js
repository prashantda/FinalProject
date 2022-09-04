import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Footer} from './components/Footer';
import {Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import JoinUs from './Users/JoinUs';
import SignIn from './Users/SignIn';
import SignUp from './Users/SignUp';
import ContactUs from './Users/ContactUs';
import Home from './components/Home';

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
      </Routes>
      <Footer />
      </>
  );
}

export default App;
