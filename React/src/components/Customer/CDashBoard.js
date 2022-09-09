import React from 'react'
import { Link } from "react-router-dom";
const styles = {
    height:50,
  }
const CDashBoard = () => {
  return (
    <>
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
                                            <h3 className='text-center'>Coustomer_Details</h3><hr></hr>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="col-mb-2">Coustomer_Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">Vikas patil</p>
                                                    </div>
                                                </div>


                                                
                                            </div>

                                            <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">9309716565</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label>Email_Address</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">Patil123@gmail.com</p>
                                                </div>
                                            </div>
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label>Address</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-success">Patil Vasati,wadegoan road,sangola</p>
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
                    <div className='offset-3'>
                        <tr >

                            <button className="btn btn-outline-dark  col-3  mt-4 rounded-pill mb-3 " style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                                backgroundColor: '#16A5A5',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }} >Mark_Completed</button>

                            
<button className="btn btn-outline-dark col-3  ms-3 mt-4 rounded-pill mb-3" style={{
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










<div class="container rounded bg-white mt-5 mb-3 ">

<div class="row">
    <div class="center  border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="rounded-circle width:70 height:120 mt-5" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" style={{
                width: 200,
                height: 250,
                borderRadius: 140 / 2,
                backgroundColor: '#FF6F00',
                transform: [
                    { scaleX: 2 }
                ]
            }} />
            <span class="font-weight-bold">Kunal</span><span class="text-black-50">kshirsgarkunal72@gmail.com</span><span> </span></div>
    </div>
    <div class="center  border-right">
        <div className='d-grid gap-4' >
            <tr className='offset-2'>
                <Link to={`/profile`}><button className="btn btn-success col-4 rounded-pill mt-2 " style={styles} >Profile</button></Link>
                <Link to={`/`}><button className=" col-1 " style={styles} ></button></Link>
                <Link to={`/allorders`}><button className="btn btn-secondary col-4 rounded-pill" style={styles} >All Orders</button></Link>
                
            </tr>
            <tr className='offset-2'>
                
            <Link to={`/changepassword`}><button className="btn btn-danger col-4 rounded-pill mt-2" style={styles}>Change Password</button></Link>
            <Link to={`/`}><button className=" col-1 " style={styles} ></button></Link>
                <Link to={`/contactus`}><button className="btn btn-info col-4 rounded-pill mt-2" style={styles}>Contact Us</button></Link>
            </tr>
        </div><br></br><br></br><br></br>
    </div>
</div>
</div>


    </>
  )
}

export default CDashBoard
