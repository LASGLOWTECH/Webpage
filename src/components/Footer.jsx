
import { useState } from "react";


const Footer = () => {
const today= new Date().getFullYear();
    const[newDay]=useState(today)
    return ( 
      <div className="row" >
 <div className="footnote col-lg-12 Col-md-6  text-center">

<h5 className="tag-text"> created by</h5>
<p>&copy; Austinosaz All rights reserved<span className="Date px-1 text-info">{newDay} </span>  </p> 

<div class="footer-icon text-cennter mb-7"  >
  <a href="https://m.facebook.com/omozemoje.augustineoisasoje" target="_blank"><i class=" iconf fab fa-facebook-f" ></i></a>
  <a href="https://twitter.com/OmozemojeAugus1" target="_blank" ><i class=" iconf fab fa-twitter" ></i></a>
  <a href="https://wa.me/2349031821590" target="_blank"><i class=" iconf fab fa-whatsapp" ></i></a>
  <a href="https://linkedin.com/in/austinosaz"><i class=" iconf fab fa-linkedin" ></i></a>
  <a href="https://github.com/LASGLOWTECH" ><i class=" iconf fab fa-github" ></i></a>
</div>

</div>
      </div>
       




        
     );
}
 
export default Footer;