// import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";
import { useEffect, useState } from "react";

import "@styles/Geolocation.scss";
import AxiosClient from "@utils/AxiosClient";
import { fetchApiInfoData } from "@/api/ipInfo/ipInfoApi";
import { IPInfoType } from "@appTypes/index";

const Geolocation = () => {
  const [ipInfo, setIpInfo] = useState<IPInfoType | null>(null);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApiInfoData();
        setIpInfo(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
      {location && ipInfo && (
        <div className="coords">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <h2>IP data</h2>
          <p>IP: {`${ipInfo.ip}`}</p>
        </div>
      )}
    </div>
  );
};

export default Geolocation;
