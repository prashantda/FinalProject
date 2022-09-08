import React from 'react'

const CDashBoard = () => {
  return (
    <>


<div class="container rounded bg-white mt-5 mb-5 ">

              <h1 className='text-center'>DashBoard</h1>
              <div class="row">
                  <div class="center  border-right">
                      <div class="d-flex flex-column align-items-center text-center p-3 py-2">
                          <img class="mt-1" width="5px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" style={{
        width: 300,
        height: 350,
        borderRadius: 140 / 2,
        backgroundColor: '#FF6F00',
        transform: [
          { scaleX: 2 }
        ]
    }} />
                      <span class="font-weight-bold">Pranit customer</span><span class="text-black-50">kshirsgarkunal72@gmail.com</span><span> </span></div>
                  </div>
                  <div class="center  border-right">
                  <div className='d-grid gap-4' >
                      <tr >
    {/* <Link to={`/userprofile`}>*/}<button className="btn btn-danager col-4  rounded-pill mt-2  " style={{ 
        textDecoration:null,
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#194D33',
        transform: [
          { scaleX: 2 }
        ]
     }}>Profile</button>{/* </Link> */}
                          <button className="btn btn-danager col-4  ms-3 rounded-pill mt-2 " style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#D33115',
        transform: [
          { scaleX: 2 }
        ]
    }} >New Enquiry</button>
                         
   <button className="btn btn-danager col-4 ms-5 rounded-pill mt-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#73D8FF',
        transform: [
          { scaleX: 2 }
        ]
    }} >Pending Orders</button>
                      </tr>
                      <tr>
           
       <button className="btn btn-danager col-4  rounded-pill mb-2 " style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#0288D1',
        transform: [
          { scaleX: 2 }
        ]
    }} >All Orders</button>

    <button className="btn btn-danager col-4 ms-3 rounded-pill mb-2" style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FF6F00',
        transform: [
          { scaleX: 2 }
        ]
    }} >Change Password</button>
                         
   <button className="btn btn-danager col-4 ms-5  rounded-pill mb-2 " style={{
        width: 350,
        height: 50,
        borderRadius: 140 / 2,
        backgroundColor: '#FCDC00',
        transform: [
          { scaleX: 2 }
        ]
    }} >Contact Us</button>
                      </tr>
                      
                      </div>
                      </div>
                  </div>
              </div>



    </>
  )
}

export default CDashBoard
