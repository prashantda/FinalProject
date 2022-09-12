import React,{useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
    const { id } =useParams()
  const [orderDetails,setorderDetails] = useState([])

  useEffect(() => {
     loadUser()
  },[])

  const loadUser = async () =>{
    const res = await axios.get(`http://localhost:8080/api/v1/employees/${id}`);
    setorderDetails(res.data)
  }
    return (
        <div>
        <div>

            <div className="container col-8 mt-5" >


                <div className='card text-bg-light p-1' >
                    <p >
                        <form method="post " className='container-center col-8' > 
                            <div class="row">
                            </div>
                            <div class="row">
                                <div className='offset-4'>
                                    <div class="col-md-8">
                                        <div class="tab-content profile-tab" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <h3 className='text-center'>Order_Details</h3><hr></hr>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="col-mb-2">Order ID</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{orderDetails.firstName}</p>
                                                        <p class="text-success">{orderDetails.orderId}</p>
                                                    </div>
                                                </div>    
                                            </div>
                                            <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Order Date</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">9309716565</p>
                                                        <p class="text-success">{orderDetails.orderDate}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label>Customer's Name</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">Patil123@gmail.com</p>
                                                    <p class="text-success">{orderDetails.customerName}</p>
                                                </div>
                                            </div>
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label>Supplier</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">Patil Vasati,wadegoan road,sangola</p>
                                                    <p class="text-success">{orderDetails.supplier}</p>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Service</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">i wanted plubing my tank</p>
                                                    <p class="text-success">{orderDetails.service}</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Service Description</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">i wanted plubing my tank</p>
                                                    <p class="text-success">{orderDetails.serviceDescription}</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Service Status</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">i wanted plubing my tank</p>
                                                    <p class="text-success">{orderDetails.status}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>isExpired</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">i wanted plubing my tank</p>
                                                    <p class="text-success">{orderDetails.status}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    <div className='offset-3'>
                        <tr >

                            <button className="btn btn-outline-dark  col-3  mt-3 rounded-pill mb-3 " style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                                backgroundColor: '#16A5A5',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }} >Mark_Completed</button>

                            
<button className="btn btn-outline-dark col-3  ms-3 mt-3 rounded-pill mb-3" style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                                backgroundColor: '#D33115',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }} >Cancel_Order</button>

                        </tr></div>
                    </p>
                </div>
            </div>

        </div>
        
    </div>


    )
}

export default  OrderDetails