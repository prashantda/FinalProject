import React,{useEffect, useState}  from 'react'
import {Link} from 'react-router-dom'
import Connection from '../components/Services/Connection'
import projImg1 from '../Assets/image/homesafety.jpg'


const Card = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        Connection.getAllUsers().then((response)=> {
            setUsers(response.data)
           console.log(response.data)
       }).catch(error =>{
           console.log(error);
       })
    },[])
  return (
    <>
  {
         users.map(
                user =>
                <body>
                <div className='cards'>
                    <div className='image-container'>
                        <img src={projImg1} alt=""/>
                    </div>
                    <div className='card-footer'>
                        {/* <span>Pd Ghorpade</span>
                        <h3>Wish-It</h3> */}
                <h3>
                {user.emailId}
                </h3>
                <Link  to={``} className="read-more">Read More <span>&rarr;</span></Link>
            </div>
        </div>
    </body>
                    )
                }
                {/* <p>
                Plumbing Services
                </p> */}
    </>
    )
}

export default Card