import React from "react";
import Search from "./Search.js";
import SearchResult from "./SearchResult";
import Facebooking from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(client => {
        return (
          client.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          client.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult data={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
