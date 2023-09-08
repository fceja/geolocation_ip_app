import { useState } from "react";

import "../styles/Geolocation.css";
import AxiosClient, {
  CustomAxiosError,
  CustomAxiosResponse,
} from "../utils/AxiosClient";

function GeolocationComponent() {
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
          .then((response: CustomAxiosResponse) => {
            console.log("response:", response);
          })
          .catch((error: CustomAxiosError) => {
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
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}

export default GeolocationComponent;
