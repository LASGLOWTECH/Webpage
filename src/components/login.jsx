import { useState } from "react";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import ContactInfo from "./ContactInfo";


const ContactUs = () => {
  const form = useRef();
  const [loading, setIsloading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    setIsloading(true);

    emailjs.sendForm('service_9yexy8p', 'template_cl62k3c', form.current, 'PBTi6vGyx_hHTMRZs')

      .then((result) => {

        console.log(result.text);
        setIsloading(false);
        alert("<h4>sent</h4>")

      }, (error) => {
        console.log(error.text);
        ;
      });
    e.target.reset()
  };



  return (
    <div>

      <section className="    ">

        <div className='d-flex  agency1 justify-content-center  align-items-center flex-column ' style={{ height: "80vh" }}>

          <h3 className=" centertext text-left text-light display-4  fw-bolder px-4">Contact Us</h3>

          <h5 className="real  centertext fw-bold py-1 ">Get in touch</h5>
          <div className='linesd   d-flex flex-row justify-content-md-start  justify-content-sm-start align-items-sm-center  px-4'>
            <div className='dot  mx-2 '></div>
            <div className='dot  mx-2'></div>
            <div className='dot  mx-2'></div>
            <div className='dot2  mx-2'></div>

          </div>
        </div>

      </section>




      <section className="workings py-5">
        <Container>


          <Row>
            {ContactInfo.map(items => {
              return (
                <Col lg={4} md={6} key={items.id} className='secure justify-content-lg-center mt-3  py-2 '>
                  <div className='d-flex h-100  rounded-2 p-3 flex-column'>
                    <div className=' d-flex pt-3  secure align-items-center '>
                      <items.icon.iconTitle className='fw-bolder display-6 fs-sm-1 fw-bolder  real' />
                      <h5 className='text-light pt-lg-3 pt-md-3 fw-bolder px-4 padtext  '>{items.title}</h5>
                    </div>



                    <p className='  text-light fs-6 centertext fw-medium pt-4 '>{items.info}</p>
                  </div>

                </Col>

              )
            })}



            <Col lg={6}>
              <form className="formal p-3" ref={form} onSubmit={sendEmail} >

                <h5 className='real pt-lg-3 pt-md-3 fw-bolder  padtext  '>Enter your Details</h5>

                <div className="form-group">
                  <label for="exampleFormControlInput "  className=" text-light pt-3 pb-1">Name</label>
                  <input type="text"
                    className="form-control bg-dark text-light"
                    id="exampleFormControlInput1"
                    name="user_name"
                    placeholder="Name"

                  ></input></div>

                <div className="form-group">
                  <label for="exampleFormControlInput" className=" text-light pt-3 pb-1">Email</label>
                  <input type="Email"
                    className="form-control bg-dark text-light"
                    id="exampleFormControlInput1"
                    name="user_email"
                    required placeholder="Email"

                  ></input></div>



                <div className="form-group">
                  <label for="exampleFormControlInputct "  className=" text-light pt-3 pb-1">Message</label>
                  <label for="exampleFormControlTextarea1"></label>
                  <textarea className="form-control bg-dark text-light" name="message" id="exampleFormControlTextarea1" placeholder="Message" cols="10"
                    rows="3"></textarea></div>

                <div className="form-group">
                  {!loading && <input type="submit" className=" px-3 py-2 rounded-3 mt-3 bg-color text-dark" value="Send" />}
                  {loading && <input type="submit" className=" px-3 py-2 rounded-3 mt-3 bg-success text-light" disabled value="Sending" />}
                </div>


              </form>


            </Col>


          </Row>

        </Container>
      </section>















    </div>


  );
};
export default ContactUs;