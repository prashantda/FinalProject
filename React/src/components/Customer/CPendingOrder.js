import React, { Component } from 'react'

export default class CPendingOrder extends Component {
    render() {
        return (
            
            <div className="container col-5 mt-5 mb-5">


            <div className='card text-bg-light p-3 '>
                <form>
                    <h3 className='text-center'>Order Details</h3><hr></hr>
                    <div className="form-group mb-2">
                        <label className="form-label mt-2">Supplier Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="offset-1">Dynamic Electricals</span>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label mt-2">Service:</label>
                        {/* <span class="offset-1">Dynamic Electricals</span> */}
                        <span class="badge rounded-pill text-bg-warning offset-3"><h6>Electrical</h6></span>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label mt-2">Supplier Address:</label>
                        <span class="offset-1">216/1782 Pimpri Pune-411018</span>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label mt-2">Supplier Contact:</label>
                        <span class="offset-1">8237251602</span>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label mt-2">Description:</label>
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="">Old Mixture having problem with motor</span>
                    </div>
                    <div className='d-grid gap-2'>
                        <tr>
                       
                        <button className="btn  btn-danger mt-3 rounded-pill offset-3 col-6">Cancel</button></tr>
                    </div>
                </form>
            
                <div className='text-center mt-3'><button type="button" class="btn btn-outline-primary">Back to Orders</button></div>
            
            </div>
            </div>
            

        )
    }
}