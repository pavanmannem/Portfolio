import React, { useState, useEffect } from 'react';
import './locationtime.css'

function LocTime() {
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(data => {
        const city = data.city;
        const region = data.region;
        const country = data.country;
        const countryCode = data.country_code;
        let locationString = `${city}, `;
        if (region && country !== "") {
          locationString += `${region}`;


        } else {
          locationString += `${countryCode}`;

        }
        setLocation(locationString);
        setTime(new Date().toLocaleTimeString());
        const intervalId = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId);
      })
      .catch(error => {
        console.log(error);
        setLocation("Unable to get location.");
      });
  }, []);

  console.log(location);
  console.log(time);

  return (
    <div className="location-time">
      <p>{location.toUpperCase()} — {time.toUpperCase()}</p>
    </div>
  );
}

export default LocTime;
