import React from 'react';
import carousel3 from "../images/2.jpg";
import carousel4 from "../images/1.jpg";
import "../styles/Carousel.css"; 

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      
      <div className="carousel-inner">
        
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

        <div className="carousel-item active">
          <img src={carousel3} className="d-block w-100 carousel-image" alt="..." />
          <div className="image-overlay carousel-content">
            <h2 className="carousel-title">
              Indoor Table <br></br>
              Tennis &
              Coaching
            </h2>
            <p className="carousel-text">
              Get your game on point with our premium indoor <br></br>cricket nets and
              bowling machines!
            </p>
            <a href="" className="btn overlay-button">
              Book your slot
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel4} className="d-block w-100 carousel-image" alt="..." />
          <div className="image-overlay">
            <h2 className="carousel-title">Indoor Cricket <br></br>Nets & Coaching</h2>
            <p className="carousel-text">
              Get your game on point with our premium indoor <br></br> cricket nets and
              bowling machines!
            </p>
            <a href="/freHitZone/AllSports" className="btn overlay-button">
              Book your slot
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel4} className="d-block w-100 carousel-image" alt="..." />
          <div className="image-overlay">
            <h2 className="carousel-title">Indoor Cricket <br></br>Nets & Coaching</h2>
            <p className="carousel-text">
              Get your game on point with our premium indoor <br></br> cricket nets and
              bowling machines!
            </p>
            <a href="/freHitZone/AllSports" className="btn overlay-button">
              Book your slot
            </a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;