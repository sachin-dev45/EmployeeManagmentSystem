import React from 'react'

import CommonNavbar from './CommonNavbar'

export default function FirstPage() {
  return (
    <div>
       
        <h1 className='heading'>Wellcome to Employee Management Sysytem</h1>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692" 
              className="d-block w-100"
              alt="office discussion"
              style={{ height: "700px", objectFit: "cover" }}
            />
          <div className="carousel-caption">
            <h5>HR Management</h5>
            <p>Managing employees efficiently</p>
          </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
          <img 
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"  
            className="d-block w-100 mt-3" 
            alt="workspace"
            style={{ height: "700px", objectFit: "cover" }}
          />

            <div className="carousel-caption">
              <h5>Team Collaboration</h5>
              <p>Working together to achieve goals</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
              className="d-block w-100" 
              alt="meeting"
              style={{ height: "700px", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h5>Professional Growth</h5>
              <p>Empowering employees for success</p>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </div>
  )
}
