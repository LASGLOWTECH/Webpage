
import { Link } from 'react-router-dom';
import Worksection from "./worksection";
import Testimonials from './Testimonials';

import { Row, Col, Container } from 'react-bootstrap';
import React from "react";
import Featureslist from './featureslist';
import Featureslist2 from './features2';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState, useEffect } from 'react';



// import { PrivacyTip } from '@mui/icons-material';

const Homepage = () => {
  const [counton, setCounton] = useState(false)
  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);


  const endCount = () => {
    setCounton(false)
  }
  const startCount = () => {
    setCounton(true)

  }
  return (
    <div className="home-hero ">
      <div className="Landing pb-4 ">
        <section>
          <Container>
            <div className="row  pt-5">

              <div className="col-lg-7 py-3  " id="row1" data-aos="slide-right">
                <h3 className="hero-text fw-normal pt-5 pb-2  ps-4 ">Bringing Design Ideas to Reality...</h3>
                <h2 className="text-left px-4">
                  WE PROVIDE EXCELLENT GRAPHIC AND WEB SOLUTIONS
                </h2>

                <div className='linesdot d-flex flex-row justify-content-md-start  justify-content-sm-center align-items-sm-center pt-2 px-4'>
                  <div className='dot bg-info mx-2 '></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot2 bg-info mx-2'></div>

                </div>
                <p className="hero-text2 fs-6 text-normal pt-5 mx-4 ">All you need in one place, we make use of our best to effect what you want. Try us and testify later</p>

                < div className="   mt-5 d-flex b-items flex-row ps-4 justify-content-start ">
                  <div>
                    <button className="  px-3 py-2 fw-bold CTA"  > <Link to="/login" className=" text-dark text-decoration-none">Contact Us</Link> </button>

                  </div>




                </div>

              </div>

              <div className="col-lg-5  d-flex jusify-content-center align-items-ceneter pt-5" id="row2" data-aos="slide-left">
                <img src='./Images/man.png' alt='workimage ' className='w-100 p-3'></img>

              </div>
            </div>
            <section className='area bg-dark rounded-4  p-5' data-aos="zoom-in">
              <Row className=''>
                {Featureslist.map(features => {
                  return (
                    <Col lg={4} md={6} key={features.id} className='secure   py-3 px-3' >
                      <div className='d-flex p-2 h-100 border border-info   rounded-2 flex-column'>
                        <div className=' d-flex justify-content-between align-items-center item1'>
                          <features.icon.iconTitle className='fw-bolder display-4 fe-bold text-info' />
                          <h3 className='fill-text text-secondary pe-5 fw-bolder display-4'>{features.Num}</h3>
                        </div>

                        <h5 className='text-light fw-bolder pt-4'>{features.Header}</h5>
                        <p className='  text-light fs-6  pt-2 '>{features.info1}</p>
                      </div>

                    </Col>
                  )
                })}



              </Row>
            </section>

            <div className='linesdo d-flex  secure justify-content-between  align-items-center    py-5 px-2'>
              <div className='dot2 bg-info mx-2'></div>

              <h4 className='text-light fw-bolder fs-3  '> Trusted by <span className="text-info fs-1">  8+</span> Clients</h4>
              <div className='dot2 bg-info mx-2'></div>

            </div>



          </Container>
        </section>

      </div>

      <section className='area bg-dark  p-3' id='aboutus'>

        <Container>

          <Row className='my-3'>



            <Col lg={6} className='py-5  agency1 ' >

              <div className='d-flex py-5  justify-content-start  h-100 secure  rounded-2 flex-column'>

                <h5 className="text-info fw-bold pt-2 pb-2  ps-4 ">Laser Glow Technologies</h5>
                <h2 className=" centertext text-left text-light display-4  fw-bolder px-4">LASGLOWTECH</h2>

                <div className='linesd d-flex flex-row justify-content-md-start  justify-content-sm-start align-items-sm-center pt-2 px-4'>
                  <div className='dot bg-info mx-2 '></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot2 bg-info mx-2'></div>

                </div>

      
                
          <p className='  px-4 text-light centertext fs-6 text-normal  pt-4 '>Check profile to know more about us</p>
          <div  className='mx-4'>
                    <button className="  px-3 py-2 fw-normal  CTA"  > <a href="https://myfolioapp.onrender.com" className=" text-dark text-decoration-none">View  Profile</a> </button>

                  </div>

     
     
      </div>
            </Col>


            <Col lg={6} md={6} className='secure   py-2 px-2'>
              <div className='d-flex justify-content-start p-2 h-100 secure  rounded-2 flex-column'>
                <h3 className="text-info fw-medium pt-2 pb-2  ps-4 ">About us</h3>
                <h2 className=" centertext text-left text-light display-5 fs-2 fw-bolder px-4">Introduction About Our Digital Agency Sector</h2>

                <div className='linesd d-flex flex-row justify-content-md-start  justify-content-sm-start align-items-sm-center pt-2 px-4'>
                  <div className='dot bg-info mx-2 '></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot2 bg-info mx-2'></div>

                </div>

                <p className='  px-4 text-light centertext fs-6 text-normal  pt-4 '>Easily Accessible at any time, Send your brief through the contact section of this page, and it will be responded to, within short time send me message or use the social media links to chat with us.</p>


                {/* greenbox  */}

                <Row className="mx-4 ">

                  <Col lg={6} className="bigno bg-info d-flex   justify-content-center align-items-center flex-column rounded-2 mb-4 p-3">
                    {/* make h1 count whrn scroll into view */}
                    <ScrollTrigger
                      onEnter={startCount}
                      onExit={endCount}>

                      <h1 className='  text-dark  display-1  fw-bold '>
                        {counton &&
                          <CountUp
                            start={0}
                            end={8}
                            duration={2}
                            delay={0} />}+

                      </h1>


                    </ScrollTrigger>

                    <p className='   text-dark text-center fw-bolder fs-6  '>Years of Work Experience.</p>
                  </Col>


                  <Col lg={5} className='py-3'>
                    {Featureslist2.map(feat2 => {
                      return (
                        <div className='d-flex flex-row justify-content-start  align-items-top' key={feat2.id}>
                          <feat2.icon.iconTitle className='text-info fs-5' />
                          <p className='  text-light ps-2  fs-6  '>{feat2.info1}</p>

                        </div>
                      )
                    })}



                  </Col>
                  <div className='mt-3'>
                    <button className=" centertext px-4 py-2 fw-normal CTA" href="/" > <Link to="/login" className=" text-dark text-decoration-none">More About</Link> </button>

                  </div>


                </Row>

                {/* end */}

              </div>

            </Col>




          </Row>

        </Container>

      </section>

      <section className='workings' id='workings'>
        <Worksection />
        {/* <About /> */}
      </section>


      {/* feed back section */}

      <section className='area bg-dark  p-3' id="feedback">

        <Container>

          <Row className='py-3'>

            <Col lg={6} md={6} className='  py-2 px-2'>
              <div className='d-flex justify-content-lg-start secure  p-2 h-100 justify-content-sm-center  rounded-2 flex-column'>
                <h3 className="text-info fw-medium pt-2 pb-2  ps-4 ">Call to Action</h3>
                <h2 className="text-left text-light display-5 fs-2 fw-bolder px-4">Need Best Help for your next Project!</h2>

                <div className='linesd d-flex flex-row justify-content-md-start  justify-content-sm-center align-items-center pt-2 px-4'>
                  <div className='dot bg-info mx-2 '></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot2 bg-info mx-2'></div>

                </div>

                <p className=' px-4 text-light fs-6 text-normal  pt-4 '>We are known for our 24/7  Digital  support. We are accessible from around the world</p>
                <h3 className='fill-text text-secondary pe-5 fw-bolder display-4'></h3>


                {/* greenbox  */}
             


                {/* make h1 count whrn scroll into view */}

                <div className='mt-4 mx-4'>
                  <button className="  px-4 py-2 sm-place-items-center fw-normal CTA" > <a href="https://wa.me/2349031821590" className=" text-dark text-decoration-none">Engage us</a> </button>

                </div>


              </div>

            </Col>


            <Col lg={6} className=' py-3'>

              <div className='row'>
                <div className='col-lg-6'>
                  <div className="bigno  d-flex   justify-content-center align-items-center flex-column rounded-2 mb-4 p-3">

                    <h4 className='  text-info display-3  fw-bold '> 8+ </h4>

                    <p className='   text-light text-center  fs-6  '>Happy customers</p>


                  </div>

                </div>


                <div className='col-lg-6'>
                  <div className="bigno d-flex   justify-content-center align-items-center flex-column rounded-2 mb-4 p-3">



                    <ScrollTrigger
                      onEnter={startCount}
                      onExit={endCount}>

                      <h1 className='  text-info  display-3  fw-bold '>
                        {counton &&
                          <CountUp
                            start={0}
                            end={96}
                            duration={2}
                            delay={0} />}%

                      </h1>


                    </ScrollTrigger>



                    <p className='   text-light text-center fw-normal fs-6  '>Clients satisfacton.</p>


                  </div>

                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className="bigno  d-flex   justify-content-center align-items-center flex-column rounded-2 mb-4 p-3">

                    <ScrollTrigger
                      onEnter={startCount}
                      onExit={endCount}>

                      <h1 className='  text-info  display-3  fw-bold '>
                        {counton &&
                          <CountUp
                            start={0}
                            end={10}
                            duration={2}
                            delay={0} />}+

                      </h1>


                    </ScrollTrigger>

                    <p className='   text-light text-center fw-normal fs-6  '>Completed Projects</p>


                  </div>

                </div>


                <div className='col-lg-6'>
                  <div className="bigno d-flex   justify-content-center align-items-center flex-column rounded-2 mb-4 p-3">

                    <h1 className='  text-info  display-3  fw-bold '>   8+ </h1>

                    <p className='   text-light text-center fw-normalfs-6  '>Years of Work Experience.</p>


                  </div>

                </div>
              </div>

            </Col>

          </Row>



        </Container>

      </section>
      <section className="testimonials " id='testimonials'>

        <Testimonials />
      </section>
     
    </div >
  );
}

export default Homepage;




