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
        return axios.get('http://localhost:8086/api/supplier/serviceslist')
      }
      getSupplierDashboard(){      
        return axios.get('http://localhost:8085/api/customer/supplierdashboard',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getSupplierProfile(){      
        return axios.get('http://localhost:8086/api/supplier/getsupplier',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      EditProfile(supplier){      
        return axios.put('http://localhost:8086/api/supplier/editsupplier',supplier,{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getSupplierOrders(){      
        return axios.get('http://localhost:8085/api/customer/getsupplierorders',{ headers: {"Authorization" : `Bearer ${token}`} })
      }
      getOrder(id){      
        return axios.get(`http://localhost:8085/api/customer/getsuporderdetails/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} })
      }












    
}
export default new Connection();
