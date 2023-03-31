import { useState } from "react";
import React ,{useEffect } from 'react'
import Profile from "./Profile";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Worksection = () => {

  useEffect(()=>{
    AOS.init({duration: 3000});      
    
    }, []);
    const [Item]=useState(Profile)

  return (
    <>
     <h2 className="Title  text-center py-2 "  id="info-text">OUR SERVICES/ FEATURES </h2>
      <div className="row section2  ">
          {Item.map(Val => {           
            return (
                <div className="col-lg-3  col-md-4" id="col" 
                key={Val.id}
              >
               <div className="Worksection"   data-aos="zoom-out">
<img className="pt-3" src={Val.img} alt="letm" id="servi-img"></img>
<h5 className=" pt-2 text-justify">{Val.title}</h5>
<p className="px-2  text-wrap py-1">{Val.info}
</p>



</div>

                
              </div>
            );
          })}
        </div>
      
    </>
  );
};





export default Worksection;
