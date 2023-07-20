import { useState } from "react";
import React, { useEffect } from 'react'
import Profile from "./Profile";
import { Row, Col } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Worksection = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 });

  }, []);
  const [Item] = useState(Profile)

  return (

    <div className="servicelist h-75 mx-4 py-5 ">
      <Row >
        <Col lg={6} className="secure">

          <h3 className="text-info fw-medium pt-2 pb-2  ps-4 ">Our Services</h3>
          <h2 className="text-left text-light display-5 fs-2 fw-bolder pt-2  px-4">What we can offer You!</h2>
          <div className='linesd d-flex flex-row justify-content-md-start pb-3 justify-content-start align-items-sm-center pt-2 px-4'>
            <div className='dot bg-info mx-2 '></div>
            <div className='dot bg-info mx-2'></div>
            <div className='dot bg-info mx-2'></div>
            <div className='dot2 bg-info mx-2'></div>
          </div>
        </Col>


        <Col lg={6}>
          <p className='  centertext text-light fs-6  mx-4 pt-4 fw-medium  '>We are group of skilled Tech savy agency with
            strong desire to ensure our clients are satisfied to the best advantage, without any compromise</p>
        </Col>

      </Row>



      <Row className="mx-2 d-flex justify-content-lg-center">
        {Item.map(items => {
          return (
            <Col lg={4} md={6} key={items.id} className='secure justify-content-lg-center mt-3  py-2 
            ' data-aos="slide-left">
              <div className='d-flex h-100 border  border-info border-2 bg-dark rounded-2 p-3 flex-column'>
                <div className=' d-flex pt-3  secure align-items-center '>
                  <items.icon.iconTitle className='fw-bolder display-6 fs-sm-1 fw-bolder  text-info' />
                  <h5 className='text-light pt-lg-3 pt-md-3 fw-bolder px-4 padtext  '>{items.title}</h5>
                </div>



                <p className='  text-light fs-6 centertext fw-medium pt-4 '>{items.info}</p>
              </div>

            </Col>

          )
        })}

      </Row>



    </div>


  );
};





export default Worksection;
