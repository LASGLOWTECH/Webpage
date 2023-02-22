import { useState } from "react";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [loading, setIsloading]= useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    setIsloading(true);

    emailjs.sendForm('service_9yexy8p', 'template_cl62k3c', form.current, 'PBTi6vGyx_hHTMRZs')
    
    .then((result) => {
        
          console.log(result.text);
          setIsloading(false);
          alert("sent")
         
      }, (error) => {
          console.log(error.text);
         ;
      });
      e.target.reset()
  };



  return (

    <div className="container-fluid">

<div className=' first-row align-self-center'>

<div className='first-col '>

    
      <img  className="vatar w-75  " src='/images/avatar.png' alt='avatar' ></img>
       </div>



       <div className=' second-col'>


 <form  className="formally"  ref={form} onSubmit={sendEmail}>
    < h3 className="welcome">Welcome!</h3>
<p>Enter details </p>
    
<div className="form-group">
 <label for="exampleFormControlInput"></label>
 <input type="text" 
 className="form-control" 
  id="exampleFormControlInput1"  
  name="user_name" 
  placeholder="Name" 
  
  ></input></div>

<div className="form-group">
 <label for="exampleFormControlInput"></label>
 <input type="Email" 
 className="form-control" 
 id="exampleFormControlInput1"  
  name="user_email" 
  required placeholder="Email"
  
  ></input></div>



<div className="form-group">
 <label for="exampleFormControlInput"></label>
 <label for="exampleFormControlTextarea1"></label>
              <textarea class="form-control"   name="message" id="exampleFormControlTextarea1" placeholder="Message" cols=""
                rows="3"></textarea></div>

<div className="form-group">
{ !loading && <input type="submit" className=" px-2 sub-btn mt-2 bg-primary text-light" value="Send" />}
{ loading && <input type="submit" className=" px-2 sub-btn mt-2 bg-warning text-light" disabled  value="Sending" />}
  </div>


    </form>


</div>




    </div>
    </div>


  );
};
export default ContactUs;