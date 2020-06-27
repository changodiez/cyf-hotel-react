import React from "react";

const Card = ({ img, link }) => {
  return (
    <div className="card">
      <img src={img} alt="." className="card-img-top" />
      <div className="card-body">
        <a href={link} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
