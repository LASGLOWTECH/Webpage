


import Worksection from "./worksection";
import About from "./About";

const Homepage = () => {


   return ( 
       <div className="home-hero "> 
<div className="Landing ">
 <section>
<div className="row">
  
  <div className="col-12 " id="row1">

    <h1>
    WE PROVIDE EXCELLENT GRAPHIC AND WEB SOLUTIONS
    </h1>
  
  <p className="hero-text pt-3 ">Bringing Design Ideas to Reality...</p>
 
  < div className="popper px-2 py-2 text-center">
  <h3 >  We offer your Choices</h3>
</div>

  </div>
  
</div>
 </section>

</div>
<div className="container-fluid ">
<Worksection/>
   <About/> 
       </div>
       </div>
    );
   }

export default Homepage;

 
 
 
