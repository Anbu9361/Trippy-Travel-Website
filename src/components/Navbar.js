import React,{useState} from 'react'
import './NavbarStyle.css'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import {FaBars,FaTimes} from'react-icons/fa'

function Navbar(){
    let[icon,setIcon]=useState(false)

    let handleClick=()=>{
        setIcon(!icon)
    }

    let closeSideDrawer=()=>{
        setIcon(false)
    }
    return(
        <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Trippy</h1>

       <div className='menu-icons' onClick={handleClick}>
       {
        icon?<FaTimes className="fa-times"></FaTimes>:<FaBars className="fa-bars"></FaBars>
      }

       </div>


        <ul className={icon?'nav-menu active':'nav-menu'}>
        {MenuItems.map((item,index)=>{
            return(
                <li key={index}>
                <Link onClick={closeSideDrawer} className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
           </li>
            )

        })}
          <button>SignUp</button>  
        </ul>
        </nav>
    )
}
export default Navbar