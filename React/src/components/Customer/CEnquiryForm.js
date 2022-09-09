import React, { Component } from 'react'

export default class CEnquiryForm extends Component {
  render() {
  return (
    <div className="container col-5 mt-5 mb-5">
          
             
    <div className='card text-bg-light p-3 '>
         <form>
         <h3 className='text-center'>Customer Enquiry</h3><hr></hr>
             <div className="form-group mb-2">
                 <label className="form-label mt-2 offset-3">Supplier Name:</label>
                 <span class="offset-1">Dynamic Electricals</span>
             </div>
             <div className="form-group mb-2">
                 <label className="form-label mt-2 offset-3">Service:</label>
                 {/* <span class="offset-1">Dynamic Electricals</span> */}
                <span class="badge rounded-pill text-bg-warning offset-3"><h6>Electrical</h6></span>
                
             </div>
             <div className="form-group mb-2">
                <textarea class="form-control" placeholder="Description"></textarea>
             </div>
             <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input mt-1"/>
            <label>By submitting, I agree to the Terms of Use & Privacy Policy</label>
        </div>
            <div className='d-grid gap-2'>
             <button className="btn btn-success mt-3 rounded-pill">Send Enquiry</button>
             </div>
         </form>
     
     <div className='text-center mt-3'><button type="button" class="btn btn-outline-primary">Back to Services</button></div>

</div>
</div>
    )
  }
}