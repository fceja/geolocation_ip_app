import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";
import { useState } from "react";

import "@styles/Geolocation.css";
import AxiosClient from "@utils/AxiosClient";
import { IPInfoType } from "@appTypes/index";

let ipData: IPInfoType | null = null;
const Geolocation = () => {
  axios
    .get(
      `https://ipinfo.io/json?token=${process.env.REACT_APP_IP_INFO_API_TOKEN}`,
      {
        timeout: 5000,
      }
    )
    .then((response) => {
      console.log("ipInfo response", response.data);
      ipData = response.data;
    })
    .catch((error) => {
      console.error(error);
    });

  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation({ latitude, longitude });

        AxiosClient.post("/sendEmail", {
          contactName: process.env.REACT_APP_CONTACT_NAME,
          contactEmail: process.env.REACT_APP_CONTACT_EMAIL,
          contactEmailMessage: `latitude: ${latitude} longitude: ${longitude}`,
        })
          .then((response: AxiosResponse) => {
            console.log("response:", response);
          })
          .catch((error: AxiosError) => {
            console.error("error:", error);
          });
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  };

  return (
    <div className="main-container">
      <button onClick={handleGetLocation}>Get My Location</button>
      {location && ipData && (
        <div className="coords">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <h2>IP data</h2>
          <p>IP: {`${ipData.ip}`}</p>
        </div>
      )}
    </div>
  );
};

export default Geolocation;
