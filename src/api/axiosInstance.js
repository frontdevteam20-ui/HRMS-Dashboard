// axiosInstance.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.29/hrms_tcerp/"
});

export default API;