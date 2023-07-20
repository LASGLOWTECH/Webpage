
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import{Link} from "react-router-dom";
const Footer = () => {
  const today = new Date().getFullYear();
  const [newDay] = useState(today)
  return (

    <div className="workings py-4 ">


      <Container>
        <Row className="py-4">

        
          

        
          <Col lg={4} sm={6} md={6}>
            <h5 className=' fw-bold px-4 text padtext text-info '>Quick links</h5>

            <p className='  text-light fs-6 fw-medium pt-4 px-4'><Link to ="/About" className=" text-light text-decoration-none">About us</Link></p>
           
            <p className='  text-light fs-6 fw-medium px-4 '><Link to ="/Gallery" className=" text-light text-decoration-none">Gallery</Link></p>

            <p className='  text-light fs-6 fw-medium px-4 '><Link to ="/portfolio" className=" text-light text-decoration-none">Portfolio</Link> </p>
            <p className='  text-light fs-6 fw-medium px-4 '><Link to ="/login" className=" text-light text-decoration-none">Contact</Link></p>

          </Col>


          <Col lg={4} sm={6} md={6} >
            <h5 className=' fw-bold ps-4 padtext text-info '>Contact info</h5>
            <p className='  text-light  ps-4 pt-4 fs-6 '>Address: Dutse, FCT Abuja,</p>
            <p className='  text-light ps-4 fs-6 '>Email: lasglowtech@gmail.com</p>
            <p className='  text-light  ps-4 fs-6 '>Phone: +234-903-182-1590</p>

            <p className='  text-light  px-4 fs-6 '>Postal code: 90110</p>

          </Col>


          <Col lg={4} sm={6} md={6}>
            <h5 className='  fw-bold px-4 padtext text-info '>Lasglowtech</h5>
            <p className='  text-light fs-6  px-4 pt-4 '>Lasglowtech is a digital agency, with the core mandate of designing and creating mobile responsive and user friendly websites by bringing design ideas to reality for any organization, and that clients are satisfied.</p>
            <div className="navbrand ps-4 "><img src="logo.svg" alt="i" className='navimg fs-6'></img> </div>

          </Col>

        </Row>
      </Container>
      <div className="row" >
        <div className="footnote col-lg-12 Col-md-6  text-center">

          <h5 className="tag-text pt-3 text-light"> created by</h5>
          <p className="text-light">&copy; Austinosaz All rights reserved<span className="Date px-1 text-info">{newDay} </span>  </p>

          <div class="footer-icon text-cennter mx-6 mb-7"  >
            <a href="https://m.facebook.com/omozemoje.augustineoisasoje"><i class="fs-4 text-info  iconf fab fa-facebook-f" ></i></a>
            <a href="https://twitter.com/OmozemojeAugus1"  ><i class=" text-info fs-4 iconf fab fa-twitter" ></i></a>
            <a href="https://wa.me/2349031821590" ><i class=" text-info fs-4  iconf fab fa-whatsapp" ></i></a>
            <a href="https://linkedin.com/in/austinosaz"><i class="  text-info fs-4  iconf fab fa-linkedin" ></i></a>
            <a href="https://github.com/LASGLOWTECH" ><i class=" text-info fs-4 iconf fab fa-github" ></i></a>
          </div>
          {/* <items.icon.iconTitle className='fw-bolder display-6 fs-sm-1 fw-bolder  text-info' /> */}
        </div>
      </div>




    </div>

  );
}

export default Footer;