import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Caregiver from "./views/Caregiver";
import Services from "./views/Services";
import Login from "./views/Login";
import UserProfile from "./views/UserProfile";
import Dashboard from "./views/Dashboard";
import DashboardIncome from "./views/DashboardIncome";
import DashboardSchaedule from "./views/DashboardSchaedule";
import Order from "./views/Order";
import Productcard from "./views/Productcard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
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
      { path: "userprofile", element: <UserProfile /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboardincome", element: <DashboardIncome /> },
      { path: "dashbordschaedule", element: <DashboardSchaedule /> },
      { path: "order", element: <Order /> },
      { path: "productcard", element: <Productcard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
