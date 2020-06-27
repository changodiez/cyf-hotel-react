import React from "react";

const RestaurantButton = props => {
  let orderOne = props.orderOne;
  return (
    <button className="btn btn-primary" onClick={orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
