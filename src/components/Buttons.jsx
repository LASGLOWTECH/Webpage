

import React from "react";
import Data from "./Gallery";

const Buttons = ({ filterItem, setItems, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center " id="btn">
        {menuItems.map((Val, id) => {
          return (
            <button
              className=" btn-primary p-1 px-1 mx-2 btn "
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
