import React from "react";
import SearchResultRow from "./SearchResultRow";
import CustomerProfile from "./CustomerProfile";

const SerchResult = props => {
  function getCustomerId(e) {
    console.log(e);
  }
  return (
    <div className="search-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, index) => (
            <SearchResultRow
              data={data}
              key={index}
              getCustomerId={getCustomerId}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile />
      {/* {idCustomer ? <CustomerProfile id={} /> : null} */}
    </div>
  );
};

export default SerchResult;
