import React from 'react'
import { Link } from "react-router-dom";
const styles = {
    height:50,
  }
const CDashBoard = () => {
  return (
    <>

<div class="container rounded bg-white mt-5 mb-3 ">



<div class="row">
    <div class="center  border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="rounded-circle width:70 height:120 mt-5" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" style={{
                width: 200,
                height: 200,
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
