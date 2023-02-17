import { useState } from "react";
import Profile from "./Profile";

const Worksection = () => {
    const [Item]=useState(Profile)

  return (
    <>
     <h5 className="Title  text-center py-2 "  id="info-text">Our Services </h5>
      <div className="row section2 mg-0">
          {Item.map(Val => {
            return (
                <div className="col-4 col-md-2" id="col" 
                key={Val.id}
              >
               <div className="Worksection">
<img className="pt-2" src={Val.img} alt="letm" id="servi-img"></img>
<h5 className=" pt-2 text-justify">{Val.title}</h5>
<p className="px-2 py-1">{Val.info}
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
