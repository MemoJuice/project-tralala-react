import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Caregiver from "./views/Caregiver";
import Services from "./views/Services";
import Login from "./views/Login";
import FormSignUp from "./views/FormSignUp";
import AdminDashboard from "./views/AdminDashboard";

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
      { path: "formsignup", element: <FormSignUp />},
      { path: "admindashboard", element: <AdminDashboard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
