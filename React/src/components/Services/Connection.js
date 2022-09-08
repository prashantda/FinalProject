import axios from "axios";
 const Security_db_url = 'http://127.0.0.1:8087/api/secure/token';
 var token = `${localStorage.getItem('JwtToken')}` 
class Connection{
  constructor(props) {
  
    this.state={
      items:[],
      isLoaded: false,
      redirectToReferrer:false,
      token:''
  }
  }
  

      getToken(user){      
        return axios.post('http://127.0.0.1:8087/api/secure/token',user)
      }

      getAllUsers(){
        return axios.get('http://localhost:8080/api/v1/employees')
      }

      // createAdmin(admin){
      //   return axios.post('http://localhost:8080',admin)
      // }
      saveCustomer(customer){      
        return axios.post('http://127.0.0.1:8087/api/secure/signupcustomer',customer)
      }
   
      // getAdminById(adminId){
      //   return axios.get('http://localhost:8080' + '/' + adminId)
      // }
}
export default new Connection();
