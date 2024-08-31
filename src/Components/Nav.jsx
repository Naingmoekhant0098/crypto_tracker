import React, { useState } from 'react'
 
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';
 import {RxCross2} from "react-icons/rx"
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

 
  
  return (
    <>
    <div className=' flex items-center fixed md:relative  w-full z-50   justify-between py-2 px-3 md:px-6 navHeader'> 
        
        <div className="logo">
            <Link  to={'/'}>
            <img src="./logo2.png" className=' w-[60px] md:w-20 h-[60px] md:h-20' alt="" />
            </Link>
        </div>
        <div className={`navs cursor-pointer text-center py-10 md:py-0 flex flex-col md:flex-row bg-black  md:bg-transparent z-40       items-center gap-8 w-full md:w-auto    left-0 absolute top-20  md:relative md:top-0 md:flex ${isOpen ? "flex" :"hidden"}`}>

            <div className="nav text-md hover:text-teal-700">Guide</div>
            <div className="nav text-md hover:text-teal-700">Charts</div>
            <div className="nav text-md hover:text-teal-700"  >Search</div>
            <div className="nav text-md hover:text-teal-700">Top Pools</div>
            
            
        </div>

        <div className=' block md:hidden'>
          {
            isOpen ? (
              <RxCross2  onClick={()=>setIsOpen(!isOpen)} className="text-4xl cursor-pointer hover:opacity-75"/>
            )
             : (
              <FaBarsStaggered  onClick={()=>setIsOpen(!isOpen)} className="text-3xl cursor-pointer hover:opacity-75"/>
            )
          }
        
         
        </div>
        
    </div>
 
</>
  )
}

export default Nav