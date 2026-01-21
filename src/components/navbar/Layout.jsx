import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Layout() {
  // const API = import.meta.env.VITE_API_URL;

  // const [user, setUser] = useState(null);
  // const [authLoading, setAuthLoading] = useState(true);
  // const [authError, setAuthError] = useState(null);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     setAuthLoading(true);

  //     try {
  //       const response = await axios.get(`${API}/auth/cookie/me`, {
  //         withCredentials: true,
  //       });

  //       setUser(response.data.user);
  //     } catch (error) {
  //       console.log(error);
  //       setUser(null);
  //     } finally {
  //       setAuthLoading(false);
  //     }
  //   };

  //   checkAuth();
  // }, [API]);

  // const login = async ({ email, password }) => {
  //   setAuthError(null);

  //   try {
  //     const response = await axios.post(
  //       `${API}/auth/cookie/login`,
  //       { email, password },
  //       { withCredentials: true }
  //     );

  //     setUser(response.data.user);
  //     return true;
  //   } catch (error) {
  //     const message =
  //       error.response.data.message ||
  //       error.response.data.error ||
  //       error.message;

  //     setAuthError(message || "Login failed");
  //     setUser(null);
  //     return null;
  //   }
  // };

  // const logout = async () => {
  //   setAuthError(null);
  //   try {
  //     await axios.post(
  //       `${API}/auth/cookie/logout`,
  //       {},
  //       { withCredentials: true }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setUser(null);
  //   }
  // };

  return (
    <div className="font-noto">
      <Navbar />
      <div className="min-h-[calc(100dvh-112px)]">
        <Outlet
          context={{  }}
        />
      </div>
      <Footer />
    </div>
  );
}
