import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid  ">
        <div className="row justify-content-center  ">
          {item.map(Val => {
            return (
              <div className="card-container mx-auto col-md-4 col-sm-6 card my-1 py-1  border-0 "
                key={Val.id}
              >
                <div className="card-img-top  py-1 px-1 text-center">
                  <img src= {Val.img} alt={Val.img} className="photo  " />
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
