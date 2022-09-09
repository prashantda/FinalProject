import React, { Component } from 'react'

export default class SNewEnquiry extends Component {
    render() {
        return (
            <div className="container col-8 mt-5 mb-5">


                <div className='card text-bg-light p-3  '>
                <h3 className='text-center'>Coustomer_Details</h3><hr></hr>
                <p className='container-center col-8 ms-5'>
                    <form  >
                        
                        
                        <div className="form-group mb-2">
                            <label className="form-label mt-2">Coustomer_Name :</label>
                            <span class="offset-1">Dynamic Electricals</span>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-2">Phone_No :</label>
                            {/* <span class="offset-1">Dynamic Electricals</span> */}
                            <span class="  offset-2">93099716565</span>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-2">Coustomer_Address:</label>
                            <span class="offset-1">216/1782 Pimpri Pune-411018</span>
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label mt-2">Description:</label>
                            <span class="offset-2">Old Mixture having problem with motor</span>
                        </div>
                        
                       




                        
                    </form>
                    </p>
                    <div className='d-grid gap-2'>
                            <tr>
                            <button className="btn btn-success mt-3 rounded-pill offset-1 " style={{
                                    width: 300,
                                    height: 50,
                                    borderRadius: 140 / 2,
                                    backgroundColor: '#4CAF50',
                                    transform: [
                                        { scaleX: 3 }
                                    ]
                                }}>Acept_Request</button>
                            <button className="btn btn-danger mt-3 rounded-pill offset-1" style={{
                                    width: 300,
                                    height: 50,
                                    borderRadius: 140 / 2,
                                    backgroundColor: '#4CAF50',
                                    transform: [
                                        { scaleX: 3 }
                                    ]
                                }}>Reject_Request</button>
                                </tr>
                        </div>
                    <div className='text-center mt-3'><button type="button" class="btn btn-outline-primary">Back to Orders</button></div>

                </div>
            </div>
        )
    }
}