import axios from "axios";

// Use localhost in development, production URL in production
const baseURL = import.meta.env.DEV
  ? "http://localhost:5000/api"
  : "https://evangadi-backend-0rn9.onrender.com/api";

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor: add token
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});
export default API;
