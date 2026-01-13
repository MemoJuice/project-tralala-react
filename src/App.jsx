import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import AdminManagement from "./views/AdminManagement";
import Checkout from "./views/Checkout";
import OrderConfirmation from "./views/OrderConfirmation";
import Login from "./views/Login";
import AdminDashboard from "./views/AdminDashboard";
import Register from "./views/Register";
import SignUp from "./views/SignUp";
import Cart from "./views/Cart";
import Productcard from "./views/Productcard";
import Productslist from "./views/ProductsList";
import Serviceslist from "./views/ServicesList";
import DashboardLayout from "./components/sidebardashborad/DashboardLayout";
import UserProfile from "./views/UserProfile";
import UserDashboard from "./views/UserDashboard";

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
      { path: "contact", element: <Contact /> },
      { path: "management", element: <AdminManagement /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order_confirmation", element: <OrderConfirmation /> },
      { path: "login", element: <Login /> },
      { path: "admindashboard", element: <AdminDashboard /> },
      { path: "register", element: <Register /> },
      { path: "signup", element: <SignUp /> },
      { path: "userdashboard", element: <UserDashboard /> },
      { path: "userprofile", element: <UserProfile /> },
      { path: "cart", element: <Cart /> },
      { path: "productcard", element: <Productcard /> },
      { path: "productlist", element: <Productslist /> },
      { path: "serviceslist", element: <Serviceslist /> },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
