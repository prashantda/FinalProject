import React,{useEffect, useState,useParams}  from 'react'
import { App } from 'react-bootstrap-icons'
import Connection from './Connection'
import {  useNavigate } from "react-router-dom";
const SCancalledOrder = () => {
    const { id } =useParams()
    const[order,SetOrder]=useState('')
    useEffect(() => {
        Connection.getOrder(id).then((response)=> {
            SetOrder(response.data.order)
           console.log(response.data)
       }).catch(error =>{
           console.log(error);
       })
    },[])



    return (
        <div>


        <div>
        
            <div className="container col-8 mt-5 mb-5" >
        
        
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
                                           
                                            <h3 className='text-center'>Customer_Details</h3>
                                            
                                            <hr></hr>
        
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="col-mb-2">Customer_Name</label>
                                                    </div>
                                                    <div class="col-md-6 ">
                                                        <p class="text-success">{order.id}</p>
                                                    </div>
                                                </div>
        
        
                                                
                                            </div>
        
                                            
                                               
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Work_Detail</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">i wanted plubing my tank</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                        </form>
        
                        
        
                            
        
                           
                        <div className='text-center  mt-3'><button type="button" class="btn btn-outline-primary" style={{
                            width: 300,
                            height: 50,
                            borderRadius: 140 / 2,
                           
                            transform: [
                                { scaleX: 2 }
                            ]
                        }}>Back to Orders</button></div>
        
        
                        
                    </p>
                </div>
            </div>
        
        </div>
        
        </div>
        
    )
}

export default SCancalledOrder