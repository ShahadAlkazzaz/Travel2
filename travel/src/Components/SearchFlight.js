import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchFlight() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://skyscanner44.p.rapidapi.com/fly-to-country',
      params: {
        destination: 'SI',
        origin: 'MUC',
        departureDate: '2023-07-01',
        returnDate: '2023-07-21',
        currency: 'EUR',
        locale: 'en-GB',
        country: 'UK'
      },
      headers: {
        'X-RapidAPI-Key': 'e873120381msh381004dd69210f1p1079c3jsne220638035a6',
        'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(function (response) {
        setData(response.data.PlacePrices[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="destination">
      {data ? (
        <div style={{ backgroundColor: '#210340', color: 'white', padding: '20px', borderRadius: '10px' }}>

          <h2 style={{ marginBottom: '10px' }}>{data.CountryName}</h2>
          <img src={data.ImageUrl} alt={data.CountryName} style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
          <p style={{ marginTop: '10px' }}>Hotel price: {data.HotelPrice} EUR</p>
          <a href={data.HotelUrl} style={{ color: 'inherit', textDecoration: 'none' }}>View hotels</a>
        </div>
      ) : (
        <p className='loading' >Loading...</p>
      )}
    </div>
  );
}

export default SearchFlight;
