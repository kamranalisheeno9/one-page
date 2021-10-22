import React from 'react';
import { Container } from 'react-bootstrap';
import MainBg from "../images/mbg.JPG";
import MainImage from "../images/mimage.png";
import MapBg from "../images/peoplebg.jfif";
import MapImage from "../images/people.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./onepage.css";
const OnePage = (props) => {
  return (
    <>
      <div className="main-container">

        <img src={MainBg} className="main-bg" />
        <div className="main-image">

          <img src={MainImage} />
          <div className="m-text">
            <iframe className="main-video" src="https://www.youtube.com/embed/6c4LwMc9nbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </div>


      </div>
      <div className="main-container">

        <img src={MapBg} className="main-bg" />
        <div className="main-image">

          <img src={MapImage} />
          <div className="map-text">
            <h4 className="colection-title">The Collection</h4>
            <p className="colection-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text.
              the end of women breast located at Australia on the picture.
            </p>
          </div>

        </div>


      </div>

      <div className="purple-container">
      <Container>
        <h1 className="roadmap-title">Roadmap</h1>
        <p className="roadmap-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text.
<br />
<br />
Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text.
<br />
<br />

Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of
        </p>
      </Container>
      </div>
      <div className="golden-container">

      </div>
    </>
  );
}

export default OnePage;