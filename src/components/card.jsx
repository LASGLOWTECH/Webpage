import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Card = ({ item }) => {
  return (

<div className="bg-dark py-5">

    <ResponsiveMasonry
    columnsCountBreakPoint={{350:1, 750:2, 900:4}} 
    gutter='5px' >
  
   <Masonry>

{item.map(Val => {
            return (
              <div className=" "
                key={Val.id}
              >
                <div className="card-img-top px-2  pt-2 ">
                  <img src= {Val.img} alt={Val.img} className="photo  " />
                </div>
                
              </div>
            );
          })}
</Masonry>


    </ResponsiveMasonry>
    </div>
  );
};

export default Card;
