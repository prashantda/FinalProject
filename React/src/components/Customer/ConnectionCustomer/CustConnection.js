import axios from "axios";

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
  
      getAllServices(){      
        return axios.get('http://localhost:8086/api/supplier/getservices',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
    
}
export default new Connection();
