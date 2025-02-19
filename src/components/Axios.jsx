import axios from "axios";

const API_BASE_URL = "https://lms-backend-yhaa.onrender.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // ✅ Ensures cookies are sent
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
