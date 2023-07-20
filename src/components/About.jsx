
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useEffect } from 'react'
import Team from "./Team";
import AboutInfo from './Aboutinfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {

   useEffect(() => {
      AOS.init({ duration: 3000 });

   }, []);

   return (

      <div className="  Abouts " id="About">

         <section className="    ">
            <div className='d-flex  agency1 justify-content-center  align-items-center flex-column ' style={{ height: "80vh" }}>

               <h3 className=" centertext text-left text-light display-4  fw-bolder px-4">About US</h3>

               <h5 className="text-info  centertext fw-bold py-1 ">What we Represents</h5>
               <div className='linesd   d-flex flex-row justify-content-md-start  justify-content-sm-start align-items-sm-center  px-4'>
                  <div className='dot bg-info mx-2 '></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot bg-info mx-2'></div>
                  <div className='dot2 bg-info mx-2'></div>

               </div>
            </div>

         </section>
         <section className='workings  py-5'>

            <Container>
               <Row >

                  <Col lg={6} className="secure">

                     <h3 className="text-info fw-medium pt-2 pb-2  ps-4 ">About us</h3>
                     <h2 className="text-left text-light centertext display-5 fs-2 fw-bolder pt-2  px-4">We are known for our 24/7  Digital  support. We are accessible from around the world!</h2>
                     <div className='linesd d-flex flex-row justify-content-md-start pb-3 justify-content-start align-items-sm-center pt-2 px-4'>
                        <div className='dot bg-info mx-2 '></div>
                        <div className='dot bg-info mx-2'></div>
                        <div className='dot bg-info mx-2'></div>
                        <div className='dot2 bg-info mx-2'></div>
                     </div>
                  </Col>


                  <Col lg={6}>
                     <p className='  centertext text-light fs-6  mx-4 pt-4 fw-medium  '>We are group of skilled Tech savy agency with
                        strong desire to ensure our clients are satisfied to the best advantage, without any compromise. We take pride in providing graphic, webdesign, web development, branding, Search Engine Optimization (SEO) and Social media management. Taking the interest of our clients into consideration. </p>
                  </Col>

               </Row>



               {/* <About /> */}


               <Row className=" d-flex justify-content-lg-center ">
                  {AboutInfo.map(items => {
                     return (
                        <Col lg={6} md={6} key={items.id} className='secure justify-content-lg-center mt-3  py-2 
            '>
                           <div className='d-flex h-100  bg-dark rounded-2 p-3 flex-column'>
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
            </Container>

         </section>


         <section className='teams bg-dark py-2'>
            <Container>
             




            <ResponsiveMasonry
    columnsCountBreakPoint={{350:1, 750:4, 900:4}} 
    gutter='5px' >
  
   <Masonry>

   {Team.map(reviews => {
                  return (
                     <div className="py-5" key={reviews.id}>
                        <div className="row secure d-flex bg-dark testprof1 workings rounded-4 shadow-5 justify-content-center mx-1 my-1 " >

                           <div className="col-lg-6  w-100 testprof">
                              <p className='  centertext text-light fs-6 text-normal pt-3 mt-3'>{reviews.info} </p>
                              <h5 className='text-light  pt-2 fs-5 fw-bold '>{reviews.name}</h5>
                              <p className='  text-info fs-6 fw-bold  '>{reviews.Title}</p>

                           </div>

                           <div className="col-lg-6  d-flex  justify-content-center align-items-center pb-5">

                              <div className='img-ito d-flex  position-relative   flex-row-reverse  m-2 '>

                                 <img className="icon-i border border-info border-2 " src={reviews.img} alt="house"
                                    style={{ width: '150px', height: '150px', borderRadius: '100%' }} >
                                 </img></div>


                           </div>








                        </div>

                     </div>

                  )
               })}



</Masonry>


    </ResponsiveMasonry>

</Container>
         </section>

      </div>

   );
}

export default About;



