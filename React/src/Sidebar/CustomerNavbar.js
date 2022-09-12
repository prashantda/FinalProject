import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import navIcon1 from '../Assets/image/joinUs.png';


function CustomerNavbar() {

    // const [showLinks,setShowLinks]=useStste(false);
  return (
    <div className='Navbar1' >
      <div className='leftSide'>
      <div className='links1'>
      <Link to={`/`}><a>Home</a></Link>
      <Link to={`/`}><a>Profile</a></Link>
      <Link to={`/`}><a>Name</a></Link>
      <Link to={`/`}><a>Logout</a></Link>
      </div>
      <button>Open</button>
      </div>
      <div className='rightSide'>
          <input type="text" placeholder='Search...'/>
          <button>Search</button>
      </div>
    </div>
  )
}

export default CustomerNavbar
