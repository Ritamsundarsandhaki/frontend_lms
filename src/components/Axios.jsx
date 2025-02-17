import axios from "axios";

const API_BASE_URL = 'https://lms-backend-yhaa.onrender.com'; // ✅ No dotenv.config()

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
    withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
