import axios from "axios";
// const API = axios.create({ baseURL: "http://localhost:5001/api" });
const API = axios.create({
  baseURL: "https://helpdesk-backend-y9yr.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
export default API;