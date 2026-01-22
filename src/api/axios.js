import axios from "axios";

const apiauth = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // http://localhost:3000/api/v1
  headers: {
    "Content-Type": "application/json",
  },
});

// เพิ่ม token ในทุก request
apiauth.interceptors.request.use(
  (config) => {
    // ตรวจสอบทั้ง localStorage และ sessionStorage
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// จัดการ error response
apiauth.interceptors.response.use(
  (response) => response,
  (error) => {
    // ถ้า token หมดอายุ
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default apiauth;
