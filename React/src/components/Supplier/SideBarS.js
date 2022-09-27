import React, { useState } from 'react';
import {FaHome,FaBars,FaPeopleCarry} from 'react-icons/fa'
import {FcBusinessman,FcContacts} from 'react-icons/fc'
import {BsBasket,BsShieldLock} from 'react-icons/bs'
import {TbLayoutDashboard} from 'react-icons/tb'
import {BiTask} from 'react-icons/bi'
import {BiTaskX} from 'react-icons/bi'
import {MdAddTask} from 'react-icons/md'
import {MdPendingActions} from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import {motion,AnimatePresence} from "framer-motion"
const routes=[
    {
        path:"/",
        name:"Home",
        icon:<FaHome/>,
    },
    {
        path:"sdashboard",
        name:"Dashboard",
        icon:<TbLayoutDashboard/>,
    },
    {
        path:"profiles",
        name:"Profile",
        icon:<FcBusinessman/>,
    },
    {
        path:"supplierorders",
        name:"Orders",
        icon:<BsBasket/>,
    },
    {
        path:"new",
        name:"New Orders",
        icon:<MdAddTask/>,
    },
    {
        path:"pending",
        name:"Pending Orders",
        icon:<MdPendingActions/>,
    },
    {
        path:"comp",
        name:"Completed Orders",
        icon:<BiTask/>,
    },
    {
        path:"cancel",
        name:"Cancelled Orders",
        icon:<BiTaskX/>,
    },
    
    {
        path:"changepassword",
        name:"Change Password",
        icon:<BsShieldLock/>,
    },
    {
        path:"contactUs",
        name:"Contact Us",
        icon:<FcContacts/>,
    },
   
   
   
   
    
]

const CustomerSidebar = ({children}) => {

    const[isOpen,setIsOpen]=useState(false);

    const toggle=()=>setIsOpen(!isOpen)

    const inputAnimation={
        hidden:{
            width:0,
            padding:0,
            opacity:0,
            Transition:{
                duration:0.2,
            },
        },
        show:{
            width:"140px",
            padding:"5px 15px",
            opacity:1,
            Transition:{
                duration:0.2,
            },
        },
    };

    const showAnimation={
        hidden:{
            width:0,
            opacity:0,
            Transition:{
                duration:0.5,
            },
        },
        show:{
            width:"auto",
            opacity:1,
            Transition:{
                duration:0.2,
            },
        },
    };

  return (
    <div className='main-container'>
      <motion.div animate={{width:isOpen?"200px":"35px"}} className="sidebar">
          <div className='top_section'>
              {isOpen && <h1 className='logo'>WISH IT</h1>}
              <div className='bars'>
                  <FaBars onClick={toggle}/>
              </div>
          </div>
          
          <section className='routes'>
              {routes.map((route)=>(
                  <NavLink to={route.path} key={route.name} className="linked">
                      <div className='icon'>
                          {route.icon}
                      </div>
                     <AnimatePresence>
                     {isOpen && <motion.div
                     variants={showAnimation}
                     initial="hidden"
                     animate="show"
                     exit="hidden"
                     className='link_text'>
                          {route.name}
                      </motion.div>}
                     </AnimatePresence>
                  </NavLink>
              ))}
          </section>
      </motion.div>
      <main>{children}</main>
    </div>
  )
}

export default CustomerSidebar
