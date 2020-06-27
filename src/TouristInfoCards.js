import React from "react";
import Card from "./Card";

const TouristInfoCards = () => {
  const locations = [
    {
      link: "https://www.peoplemakeglasgow.com",
      name: "Glasgow",
      img: "https://aws.traveler.es/prod/designs/v1/assets/745x496/126044.jpg"
    },
    {
      link: "https://www.visitmanchester.com",
      name: "Manchester",
      img: "https://www.dondehospedarse.com/img/donde-alojarse-manchester.jpg"
    },
    {
      link: "https://www.visitlondon.com",
      name: "London",
      img:
        "https://www.visitbritain.com/sites/default/files/styles/consumer_campaigns_hero_mobile/public/consumer_components_enhanced/header_image/vb34141644.jpg?itok=9qBFm0pJ"
    }
  ];

  return (
    <div className="containerCards">
      {locations.map(location => (
        <Card key={location.name} img={location.img} link={location.link} />
      ))}
    </div>
  );
};

export default TouristInfoCards;
