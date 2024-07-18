
import { Container, Row, Col, } from "react-bootstrap";
import { ChatQuoteFill } from "react-bootstrap-icons";
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

        <Row className='py-3  d-flex align-items-center '>

          <Col lg={6} md={6} className='   py-2 px-2' data-aos="slide-right">
            <div className='d-flex secure justify-content-start p-2 h-100  rounded-2 flex-column'>
              <h3 className="real fw-medium pt-2 pb-2  ps-4 ">Clients Testimonials</h3>
              <h2 className="text-left text-light  fs-2 fw-bolder px-4">Reviews From Our Happy Clients</h2>

              <div className='linesd d-flex flex-row justify-content-md-start  justify-content-sm-start align-items-sm-center pt-2 px-4'>
                <div className='dot  mx-2 '></div>
                <div className='dot  mx-2'></div>
                <div className='dot  mx-2'></div>
                <div className='dot2  mx-2'></div>

              </div>

              <p className='  px-4 text-light fs-6 text-normal  pt-4 '>Clients satisfaction is our major drive.The reviews we have gotten from some of our clients, shows that they are very much satisfied with the services we render to them </p>


            </div>

          </Col>


          <Col lg={6} className='   '>
          <div className='img-ito d-flex  position-relative   flex-row-reverse m-2 '>
                      <div className="rounded-5 d-flex justify-content-end  align-items-center">
                      <img src="./Images/happycl.jpg" alt="happy man " className="P-3"
                        style={{  borderRadius: '3%' }} >
                           </img> </div>
                    </div>

          </Col>

        </Row>

        <Row className="bg-light">
          {Testifiers.map(reviews => {
            return (
              <Col lg={6} key={reviews.id}>
                <div className="row d-flex bg-dark testprof1  rounded-4 shadow-5 justify-content-center mx-4 m-5"data-aos="fade-in">

                  <div className="col-lg-6  testprof">
                    <p className='   text-light fs-6 text-normal pt-3 mt-3'>{reviews.Text} </p>
                    <h5 className='text-light  pt-2 fs-5 fw-bold '>{reviews.Name}</h5>
                    <p className='  real fs-6 fw-bold  '>{reviews.position}</p>

                  </div>

                  <div className="col-lg-6  d-flex  justify-content-center align-items-center pb-5">

                    <div className='img-ito d-flex  position-relative   flex-row-reverse bg-dark m-2 '>
                      <div className="rounded-5 d-flex justify-content-end align-items-top  position-absolute mb-5 p-2 ms-5 "><ChatQuoteFill className="real  fs-3 z-index-1 " /></div>
                      <img className="icon-i  " src={reviews.icon} alt="house"
                        style={{ width: '150px',  borderRadius: '1%' }} >
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