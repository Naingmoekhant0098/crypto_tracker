import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const Ft = () => {
  return (
    <Footer bgDark className=' footer'>
    <div className="w-full">
      <div className="grid w-full grid-cols-2  place-content-center gap-8 px-8 py-8 md:grid-cols-4">
       <div className="">
       <div className="logo">
            <img src="./logo2.png" className=' w-[60px] md:w-20 h-[60px] md:h-20' alt="" />
        </div>
       </div>
        <div>
          <Footer.Title title="Company" />
          <Footer.LinkGroup col className=' mt-2 opacity-60 '>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Careers</Footer.Link>
            <Footer.Link href="#">Brand Center</Footer.Link>
            <Footer.Link href="#">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        
        <div>
          <Footer.Title title="legal" />
          <Footer.LinkGroup col className=' mt-2 opacity-60 '>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="download" />
          <Footer.LinkGroup col className=' mt-2 opacity-60 '>
            <Footer.Link href="#">iOS</Footer.Link>
            <Footer.Link href="#">Android</Footer.Link>
            <Footer.Link href="#">Windows</Footer.Link>
            <Footer.Link href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      
    </div>
  </Footer>
  )
}

export default Ft