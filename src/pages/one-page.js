import React from 'react';
import { Container, Row, Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import MainBg from "../images/mbg.JPG";
import MainImage from "../images/mimage.png";
import MapBg from "../images/peoplebg.jfif";
import Logo from "../images/logo.png";
import MapImage from "../images/people.png";
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import {Link} from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./onepage.css";
const OnePage = (props) => {
  return (
    <>
    <div id="main">
    <Navbar className="nav-bar" collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="nav-bar-li" ><Link activeClass="active" to="home" >Home </Link></Nav.Link>
      <Nav.Link className="nav-bar-li" ><Link activeClass="active" to="collection">Collection</Link></Nav.Link>
      <Nav.Link className="nav-bar-li" ><Link activeClass="active" to="roadmap" >Roadmap</Link></Nav.Link>
      <Nav.Link className="nav-bar-li" ><Link activeClass="active" to="faq" >FAQ</Link></Nav.Link>
   
    </Nav>
    <Nav>
    
      <Nav.Link className="nav-bar-li-icon" target="_blank" href="https://twitter.com/CultureOfWomen"><FaTwitter /></Nav.Link>
      <Nav.Link className="nav-bar-li-icon" target="_blank" href="https://discord.com/invite/wxaR8J52bv"><SiDiscord /></Nav.Link>
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
      <div className="main-container-front" id="home" >

        <img src={MainBg} className="main-bg" />
        <div className="main-image">

          <img src={MainImage} />
          <div className="m-text">
            <iframe className="main-video" src="https://www.youtube.com/embed/6c4LwMc9nbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </div>


      </div>
      <div className="main-container" id="collection">
        
        <img src={MapBg} className="main-bg" />
        <div className="main-image">

          <img src={MapImage} />
            <h4 className="colection-title" >The Collection</h4>
          <div className="map-text">
            <p className="colection-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text.
              the end of women breast located at Australia on the picture.
            </p>
          </div>

        </div>


      </div>

      <div className="purple-container" id="roadmap">
        <Container>
          <h1 className="roadmap-title" >Roadmap</h1>
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
      <div className="golden-container " id="faq">
        <Container>
          <h1 className="roadmap-title" >FAQ</h1>
          <p className="roadmap-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text.
            <br />
            <br />

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text.
            <br />
            <br />

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... Contrary to popular belief, Lorem Ipsum is not simply random text.

          </p>
        </Container>

      </div>
      <div className="footer-container">

        <Container fluid >
          <Row className="justify-content-around row-footer">
            <Col md={4} sm={3}>
              <img className="logo-img" src={Logo} />
            </Col>
            <Col md={4} sm={4}>
              <ul className="footer-list">
                <li><a target="_blank" href="https://twitter.com/CultureOfWomen"> <FaTwitter /></a></li>
                <li><a target="_blank" href="https://discord.com/invite/wxaR8J52bv"> <SiDiscord /> </a></li>
              </ul>
            </Col>
            <Col md={4} sm={4} className="copyright">
              <p>
              © 2021 Anna Chukhraienko
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default OnePage;