import { useEffect, useState } from "react";

import "@styles/Geolocation.scss";
import { IPInfoType } from "@appTypes/index";
import { fetchApiInfoData } from "@/api/ipInfo/ipInfoApi";
import Loading from "@components/loading/Loading";

const Geolocation = () => {
  const [ipData, setIpData] = useState<IPInfoType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApiInfoData();
        setIpData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (location) {
      setIsLoading(false);
    }
  }, [location]);

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      setIsLoading(true);

      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation({ latitude, longitude });
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
          <br />
          <h2>IP data</h2>
          <p>IP: {`${ipData.ip}`}</p>
          <p>Country: {`${ipData.country}`}</p>
          <p>City: {`${ipData.city}`}</p>
          <p>region: {`${ipData.region}`}</p>
        </div>
      )}
      {isLoading && <Loading />}
    </div>
  );
};

export default Geolocation;
