  import React from 'react'
  import logo from '../../asset/img/logo.png'
  import { NavLink } from "react-router-dom";
  import DoorbellIcon from '@mui/icons-material/Doorbell';
  import AccountBoxIcon from '@mui/icons-material/AccountBox';
  import SearchIcon from '@mui/icons-material/Search';
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
  import './header.css'
  function Header() {
   const fun=()=>{
      const menu =document.getElementById("menu");
      menu.classList.toggle("hidden");
   }
 
  return (
 <div className='sticky top-0 flex gap-10 z-50  bg-black sm:bg-transparent text-red-500'>

     <div className='  md:flex p-2'>
     <span> <img src={logo} className='w-20  ' /> </span>

<ul id='menu' className='gap-5 grid grid-cols-2 font-semibold hidden md:ml-10 md:flex md:justify-center md:gap-3  text-center text-lg     '>
  <li className='hover:shadow-2xl  p-2'><NavLink>Home</NavLink> </li> 
  <li className='hover:shadow-2xl p-2'><NavLink to="">Romance</NavLink> </li> 
<li className='hover:shadow-2xl p-2'><NavLink to="">Horror</NavLink> </li> 
  <li className='hover:shadow-2xl  p-2'><NavLink to="">Comedy</NavLink> </li> 
  <li className='hover:shadow-2xl p-2'><NavLink to=''>Animation</NavLink> </li> 
<li className='hover:shadow-2xl p-2'><NavLink>Animation</NavLink> </li> 
<li className='hover:shadow-2xl p-2'><NavLink>western</NavLink> </li> 
  <li className='hover:shadow-2xl p-2'><NavLink>Mystery</NavLink> </li> 

</ul>
       </div>




  <div>
        { <ul className='flex absolute right-3 top-2 sm:right-16 gap-4'>
       <button onClick={fun}><span className='md:hidden' >MENU</span></button>  

              <li><SearchIcon/></li>
               <li><DoorbellIcon /></li>
                  <li><AccountBoxIcon/> </li>
                   <li><ArrowDropDownIcon/></li>
        </ul> }
           </div>
 </div>
          
        

  )
}
export default Header;