import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center  ">
          {item.map(Val => {
            return (
              <div className="col-md-4 col-sm-6 card my-2 py-3  border-0 "
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src= {Val.img} alt={Val.img} className="photo w-75" />
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
