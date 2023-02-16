
/* eslint-disable */

import { useState } from "react";
import Data from "./Gallery";
import Buttons from "./Buttons";
import Card from "./card";
 const Userpage = () => {
 
  
     const [item, setItems]=  useState(Data);
     const menuItems = [...new Set(Data.map((Val) => Val.category))];
   
     const filterItem = (finditems) => {
       const newItem = Data.filter((newVal) => {
         return newVal.category === finditems;
       });
       setItems(newItem);
     };
    return ( 
   
    
     <div className="Home">
              

<div className=" container-fluid" bg-dark>
<Buttons
            filterItem={filterItem}
            setItems={setItems}
            menuItems={menuItems}
          />
   <Card item={item} />


</div>



</div>
  
           
  
       
        


       
        
     );
}
 
export default Userpage;









