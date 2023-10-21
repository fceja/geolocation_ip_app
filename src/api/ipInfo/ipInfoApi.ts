import axios from "axios";

import { IPInfoType } from "@appTypes/index";

export const fetchApiInfoData = async (): Promise<IPInfoType | null> => {
  try {
    const response = await axios.get(
      `https://ipinfo.io/json?token=${process.env.REACT_APP_IP_INFO_API_TOKEN}`,
      {
        timeout: 5000,
      }
    );
    console.log("ipInfo response", response.data);
    return response.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
