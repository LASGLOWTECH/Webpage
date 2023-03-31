

 import React ,{useEffect } from 'react'
 import Team from "./Team";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
      
   useEffect(()=>{
AOS.init({duration: 2000});      

}, []);

    return ( 
       <div className="  Aboutsec " id="About">
        <h2 className="Title text-center py-3 text-light ">ABOUT LASGLOWTECH </h2>
        {/* begining of row */}
   

        <div className="row">

   {Team.map(team=>(
    

    <div className=" col-lg-3 col-md-6  Cardes1  "  key={team.id}>
           
           <div className="artic text-center " data-aos="zoom-in-up">
           <div className="Card-Hearder py-2 text-center" ><h4>{team.Header}</h4></div>
           <img className="Aboutimg1 my-3 "   src={team.img} alt="AUG"></img>
           < h5 className="text-center text-info pt-2">{team.name}</h5>
           < h5 className="text-center fw-50 text-warning pt-2"  >{team.Title}</h5>
           <p className=" text-base  px-4"> {team.info}.</p>
           <a class="btn btn-outline-primary mx-4 my-3  text-white" id="profile-btn" href={team.link}  role="button"> {team.button}</a>
          
           </div>
            
           </div>
    

    
    ))}
</div>

{/* end of about section */}







{/* team sectiom */}



</div>

     );
}
 
export default About;



