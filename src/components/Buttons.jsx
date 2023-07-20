

import React from "react";
import Data from "./Gallery";

const Buttons = ({ filterItem, setItems, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center pt-5 " id="btn">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="  rounded-3 border-0 
              p-2 mx-2  baton"
              onClick={() => filterItem(Val)}
              key={id}>
              {Val}
            </button>
          );
        })}
        <button
          className="btn btn-success text-white p-1 px-3 mx-4 fw-bold btn"
          onClick={() => setItems(Data)}
        >
          All
        </button>


      </div>
    </>
  );
};

export default Buttons;
