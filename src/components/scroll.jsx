
// Initializing scroll to top button
// import the button
import { useEffect, useState } from "react";

import { ArrowUpCircleFill } from "react-bootstrap-icons";
const ScrollTop = () => {

   // hide the buttton by default
   const [show, setShow] = useState(false)

   //  use useEFFECT TO shoe it 
   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 500) { setShow(true) }

         else {setShow(false)}

      })

   }, [])


   const ScrolltoTop = () => {


      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }
   return (
      <div>
         {show && (
            <div className="arrow-up  " style={{ color:"#39CDCC" }}>
               <ArrowUpCircleFill onClick={ScrolltoTop} className=" load-arrow fs-1 fw-bold text-info" />
            </div>

         )}
      </div>
   );
}

export default ScrollTop;