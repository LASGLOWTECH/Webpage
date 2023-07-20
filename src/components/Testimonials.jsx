
import { Container, Row, Col, } from "react-bootstrap";
import { TelephonePlus, ChatQuoteFill, ChatFill } from "react-bootstrap-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Testifiers from "./testifiers";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);
  return (

    <>

      <Container>

        <Row className='py-3 '>

          <Col lg={6} md={6} className='   py-2 px-2' data-aos="slide-right">
            <div className='d-flex secure justify-content-start p-2 h-100  rounded-2 flex-column'>
              <h3 className="text-info fw-medium pt-2 pb-2  ps-4 ">Clients Testimonials</h3>
              <h2 className="text-left text-light  fs-2 fw-bolder px-4">Reviews From Our Happy Clients</h2>

              <div className='linesd d-flex flex-row justify-content-md-start  justify-content-sm-start align-items-sm-center pt-2 px-4'>
                <div className='dot bg-info mx-2 '></div>
                <div className='dot bg-info mx-2'></div>
                <div className='dot bg-info mx-2'></div>
                <div className='dot2 bg-info mx-2'></div>

              </div>

              <p className='  px-4 text-light fs-6 text-normal  pt-4 '>Clients satisfaction is our major drive</p>


            </div>

          </Col>


          <Col lg={6} className='   '>
            <p className='  secure px-4 text-light  fs-6 text-normal  mt-3 ' data-aos="slide-down">The reviews we have gotten from some of our clients, shows that they are very much satisfied with the services we render to them </p>

          </Col>

        </Row>

        <Row>
          {Testifiers.map(reviews => {
            return (
              <Col lg={6} key={reviews.id}>
                <div className="row d-flex bg-dark testprof1  rounded-4 shadow-5 justify-content-center mx-4 mb-5"data-aos="slide-left">

                  <div className="col-lg-6  testprof">
                    <p className='   text-light fs-6 text-normal pt-3 mt-3'>{reviews.Text} </p>
                    <h5 className='text-light  pt-2 fs-5 fw-bold '>{reviews.Name}</h5>
                    <p className='  text-info fs-6 fw-bold  '>{reviews.position}</p>

                  </div>

                  <div className="col-lg-6  d-flex  justify-content-center align-items-center pb-5">

                    <div className='img-ito d-flex  position-relative   flex-row-reverse bg-dark m-2 '>
                      <div className="rounded-5 d-flex justify-content-end align-items-top  border-info border-top-2 position-absolute mb-5 p-2 ms-5 "><ChatQuoteFill className="text-info   fs-3 z-index-1 " /></div>
                      <img className="icon-i border border-info border-2 " src={reviews.icon} alt="house"
                        style={{ width: '150px', height: '150px', borderRadius: '100%' }} >
                      </img></div>


                  </div>








                </div>

              </Col>

            )
          })}






        </Row>


      </Container>







    </>
  );
}

export default Testimonials;