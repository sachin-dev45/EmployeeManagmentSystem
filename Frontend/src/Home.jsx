import React from 'react'

export default function Home() {
  return (
    <div>
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
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" 
                className="d-block w-100" 
                alt="office"
                style={{ height: "700px", objectFit: "cover" }}
/>
            <div className="carousel-caption">
              <h5>Modern Workplace</h5>
              <p>Efficient and collaborative environment</p>
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