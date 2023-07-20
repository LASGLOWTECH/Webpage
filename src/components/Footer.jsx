
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  const today = new Date().getFullYear();
  const [newDay] = useState(today)
  return (

<div className="workings py-4 ">


<Container>
  <Row>

    <Col lg={3}>
    
    
    
    
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