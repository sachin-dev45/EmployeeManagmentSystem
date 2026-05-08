import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function CommonNavbar() {
    let navigate=useNavigate();
  return (
    <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <div class="container-fluid">
   <a class="navbar-brand" href="#" round-circle>
       <img src="data:image/jpeg;base64,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" class="rounded-circle" alt="Company Logo" width="40" height="40"></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
        <li class="nav-item">
            <Link to='/home' className='nav-link active'>Home</Link>
        </li>
        <li class="nav-item">
         <Link to='/aboutus'>About Us</Link>
        </li>
          <li class="nav-item">
         <Link to='/contactus'>Contact Us</Link>
        </li>
          <li class="nav-item">
         <Link to='/services'>Services</Link>
        </li>
       
        <li class="nav-item">
          <button className='btn btn-primary ' onClick={()=>{navigate("/registerUser")}}>Register/login</button>
        </li>
       </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
