import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResultRow = props => {
  // Function get Nigths
  const checkIn = moment(props.data.checkInDate);
  const checkOut = moment(props.data.checkOutDate);

  //is Selected?
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  //Customer Profile
  const [idProfile, setIdProfile] = React.useState("");

  const handleShowProfile = () => {
    setIdProfile(props.data.id);
    console.log(idProfile);
  };

  return (
    <tr className={isSelected ? "highlightedRow" : null} onClick={handleClick}>
      <th>{props.data.id}</th>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
      <td>
        <button className="btn btn-secondary" onClick={handleShowProfile}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResultRow;
