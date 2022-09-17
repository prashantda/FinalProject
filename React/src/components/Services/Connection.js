import axios from "axios";

// const Employee_db_url = 'http://localhost:8080/api/v1/employees'; //dummy url for checking

//  const Security_db_url = 'http://127.0.0.1:8087/api/secure/token';
  var token = `${sessionStorage.getItem('JwtToken')}` 
class Connection{
  constructor(props) {
  
    this.state={
      items:[],
      isLoaded: false,
      redirectToReferrer:false,
      token:''
  }
  }
  
      getServices(){
        return axios.get('http://localhost:8086/api/supplier/getservices',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getToken(user){      
        return axios.post('http://127.0.0.1:8087/api/secure/token',user)
      }

       getAllUsers(){
         return axios.get('http://localhost:8080/api/v1/employees')
       }

      savePassword(password){
        return axios.post('http://127.0.0.1:8087/api/secure/savepassword',password)
      }
      forgotPass(user){
        return axios.post('http://127.0.0.1:8087/api/secure/forgotpassword',user)
      }
      saveCustomer(customer){      
        return axios.post('http://127.0.0.1:8087/api/secure/signupcustomer',customer)
      }
      saveSupplier(supplier){      
        return axios.post('http://127.0.0.1:8087/api/secure/signupsupplier',supplier)
      }
   
      verifyot(user){
        return axios.post('http://127.0.0.1:8087/api/secure/verifyotp',user)
      }

    
}
export default new Connection();
