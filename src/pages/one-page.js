import React from 'react';
import {Container} from 'react-bootstrap';
import MainBg from "../images/mbg.JPG";
import MainImage from "../images/mimage.png";
import MapBg from "../images/peoplebg.jfif";
import MapImage from "../images/people.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./onepage.css";
const OnePage=(props)=> {
    return (
        <>
        <div className="main-container">

          <img  src={MainBg} className="main-bg" /> 
          <div className="main-image">
        
          <img  src={MainImage}  />
          <div className="m-text">
          <iframe className="main-video"  src="https://www.youtube.com/embed/6c4LwMc9nbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

              </div> 
              
        
        </div>
        <div className="main-container">

          <img  src={MapBg} className="main-bg" /> 
          <div className="main-image">
        
          <img  src={MapImage}  />
          <div className="map-text">
          <iframe className="map-video" src="https://www.youtube.com/embed/79VQMMiVLUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

              </div> 
              
        
        </div>
      
          <div className="purple-container">
            
            </div>
          <div className="golden-container">
            
            </div>
        </>
    );
}

export default OnePage;