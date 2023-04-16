import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import "../App.css";

function Search() {
  const [destination, setDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("1000");

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleSearch = () => {
    console.log("Destination:", destination);
    console.log("Selected date:", selectedDate);
    console.log("Selected price:", selectedPrice);
  };

  return (
    <div>
        <h1 className="">Flight deals by destination</h1>

    <div className="search-container">

      <div className="search-form">
        <div className="search-field">
          <label htmlFor="destination">Destination</label>
          <div className="input-container">
            <input
              type="text"
              id="destination"
              placeholder="Enter your destination"
              value={destination}
              onChange={handleDestinationChange}
            />
            <FaMapMarkerAlt className="icon" />
          </div>
        </div>
        <div className="search-field">
          <label htmlFor="date">Date</label>
          <div className="input-container">
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <BiCalendar className="icon" />
          </div>
        </div>
        <div className="search-field">
          <label htmlFor="price">Price</label>
          <div className="input-container">
            <input
              type="range"
              id="price"
              min="1000"
              max="6000"
              value={selectedPrice}
              onChange={handlePriceChange}
            />
            <span className="price-value">{selectedPrice ? `$${selectedPrice}` : ""}</span>
          </div>
        </div>
        <button className="search-button" onClick={handleSearch}>
          <IoMdSearch className="search-icon" />
          Search
        </button>
      </div>
    </div>
    </div>
  );
}

export default Search;
