import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Caregiver from "./views/Caregiver";
import Services from "./views/Services";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import UserDashboard from "./views/UserDashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="mind-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "caregiver", element: <Caregiver /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "userdashboard", element: <UserDashboard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
