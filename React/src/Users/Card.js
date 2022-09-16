import React,{useEffect, useState}  from 'react'
import {Link,useParams} from 'react-router-dom'
 import projImg1 from '../Assets/image/homesafety.jpg'
// import projImg2 from '../Assets/image/interiordesign.jpg'
// import projImg3 from '../Assets/image/carpenter1.jpg'
// import projImg4 from '../Assets/image/electrician.jpeg'
// import projImg5 from '../Assets/image/plumbing.jpg'
// import projImg6 from '../Assets/image/painting.png'
// import projImg7 from '../Assets/image/Buildingmaintena.jpg'
// import projImg8 from '../Assets/image/desktoplaptoprepair.jpg'
// import projImg9 from '../Assets/image/fabricator.png'
// import projImg10 from '../Assets/image/flooring.jpg'
// import projImg11 from '../Assets/image/gardening.jpg'
// import projImg12 from '../Assets/image/waterproofing.png'
import CustConnection from '../components/Customer/ConnectionCustomer/CustConnection'


const Card = () => {

    // const infor = [
    //     {
    //         ImgUrl:projImg1,
    //         path:"/",
    //         name:"Home Safety",
    //     },
    //     {
    //          ImgUrl:projImg2,
    //         path:"/",
    //         name:"Interior Design",
    //     },
    //     {
    //         ImgUrl:projImg3,
    //         path:"/",
    //         name:"Carpenter",
    //     },
    //     {
    //         ImgUrl:projImg4,
    //         path:"/",
    //         name:"Electrician",
    //     },
    //     {
    //          ImgUrl:projImg5,
    //         path:"/",
    //         name:"Plumbing",
    //     },
    //     {
    //         ImgUrl:projImg6,
    //         path:"/",
    //         name:"Painting",
    //     },
    //     {
    //         ImgUrl:projImg7,
    //         path:"/",
    //         name:"Building Maintaience",
    //     },
    //     {
    //          ImgUrl:projImg8,
    //         path:"/",
    //         name:"Electrical Appliance",
    //     },
    //     {
    //         ImgUrl:projImg9,
    //         path:"/",
    //         name:"Fabrication Works service",
    //     },
    //     {
    //         ImgUrl:projImg10,
    //         path:"/",
    //         name:"Flooring Works",
    //     },
    //     {
    //          ImgUrl:projImg11,
    //         path:"/",
    //         name:"Gardening",
    //     },
    //     {
    //         ImgUrl:projImg12,
    //         path:"/",
    //         name:"Waterprofing",
    //     },
    // ]

    // const {id} =useParams()
    // var token=sessionStorage.setItem("JwtToken", response.data.token)
    const [custservice,setcustservice] =useState([])

    useEffect(()=>{
        CustConnection.getAllServices().then((response)=>{
            setcustservice(response.data)
        }).catch(error =>{
            console.log(error);
        })
    },[])

  return (
    <>
    <div className='container'>
        <div className='row'>
        
                     <div className='abc col-sm mt-4' >
                     <body className='infor'>
                         <div className='cards'>
                             <div className='image-container'>
                                 <img src={projImg1} alt=" "/>
                             </div>
                             <div className='card-footer'>
                                 <span>{custservice.id}</span>
                                 <h3>{custservice.name}</h3>
                                 {/*<Link to={``} className="read-more">Read More <span>&rarr;</span></Link> */}
                             </div>
                          </div>
                     </body>
                     </div>
                    
         </div>
    </div>
                    )
    </>
    )
}

export default Card