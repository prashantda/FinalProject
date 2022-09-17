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
        return axios.get('http://localhost:8086/api/supplier/getservices',{ headers: {"Authorization" : `Bearer ${token}`} });
      }
    
      getSupplierList(id){      
        return axios.get('http://localhost:8086/api/supplier/getservicesuppliers' + '/' + id,{ headers: {"Authorization" : `Bearer ${token}`} });
      }

      getSupplierDetails(id){      
        return axios.get(`http://localhost:8086/api/supplier/getsupplier/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
      }

      setOrder(order){
        return axios.post(`http://localhost:8085/api/customer/saveorder`,order,{ headers: {"Authorization" : `Bearer ${token}`} });
      }

      getOrder(){
      return axios.get(`http://localhost:8085/api/customer/getcustomer`,{ headers: {"Authorization" : `Bearer ${token}`} });
      }
}
export default new Connection();
