import { useState } from "react";
import Profile from "./Profile";

const Worksection = () => {
    const [Item]=useState(Profile)

  return (
    <>
     
      <div className="row section2 mg-0">
          {Item.map(Val => {
            return (
                <div className="col-4 col-md-2" id="col" 
                key={Val.id}
              >
               <div className="Worksection">
<img src={Val.img} alt="letm" id="servi-img"></img>
<h5 className="text-justify">{Val.title}</h5>
<p>{Val.info}
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
