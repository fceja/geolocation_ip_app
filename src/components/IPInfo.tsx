import axios from "axios";
import { useState, useEffect } from "react";

import { IPInfoType } from "../types";

const IPInfo = () => {
  const [ipInfo, setIpInfo] = useState<IPInfoType | null>(null);

  useEffect(() => {
    const getIpInfo = async () => {
      try {
        const response = await axios.get(
          `https://ipinfo.io/json?token=${process.env.REACT_APP_IP_INFO_API_TOKEN}`,
          {
            timeout: 5000,
          }
        );
        setIpInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getIpInfo();
  }, []);

  return (
    <>
      <div>IpInfo</div>
      {ipInfo && (
        <div>
          <p>IP Address: {ipInfo.ip}</p>
          <p>Hostname: {ipInfo.hostname}</p>
          <p>City: {ipInfo.city}</p>
          <p>Region: {ipInfo.region}</p>
          <p>Country: {ipInfo.country}</p>
          <p>Location: {ipInfo.loc}</p>
          <p>Organization: {ipInfo.org}</p>
          <p>Postal Code: {ipInfo.postal}</p>
          <p>Timezone: {ipInfo.timezone}</p>
        </div>
      )}
    </>
  );
};

export default IPInfo;
