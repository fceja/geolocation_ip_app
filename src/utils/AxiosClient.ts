import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_PROFILE_API_URL,
  timeout: 5000,
  headers: {
    "x-api-key": process.env.REACT_APP_PROFILE_API_KEY,
  },
});

export default AxiosClient;

export type CustomAxiosResponse = AxiosResponse;
export type CustomAxiosError = AxiosError;
