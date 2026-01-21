import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/navbar/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import AdminManagement from "./views/AdminManagement";
import Checkout from "./views/Checkout";
import OrderConfirmation from "./views/OrderConfirmation";
import AdminDashboard from "./views/AdminDashboard";
import RegisterForm from "./components/auth/RegisterForm";
import LoginFrom from "./components/auth/LoginFrom";
import ProfileInfoForm from "./views/ProfileInfoForm";
import Cart from "./views/Cart";
import Productcard from "./views/CareGiverCard";
import CareGiverCard from "./views/CareGiverCard";
import OurCareGiver from "./views/OurCareGiver";
import Serviceslist from "./views/ServicesList";
import DashboardLayout from "./components/sidebardashborad/DashboardLayout";
import UserProfile from "./views/UserProfile";
import UserDashboard from "./views/UserDashboard";
import RoleSelection from "./components/auth/RoleSelection";
import CustomerProfileForm from "./components/profileform/CustomerProfileForm";

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
      { path: "login", element: <LoginFrom /> },
      { path: "admindashboard", element: <AdminDashboard /> },
      { path: "profile-infoform", element: <ProfileInfoForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "userdashboard", element: <UserDashboard /> },
      { path: "userprofile", element: <UserProfile /> },
      { path: "cart", element: <Cart /> },
      { path: "caregivercard", element: <CareGiverCard /> },
      { path: "ourcaregiver", element: <OurCareGiver /> },
      { path: "serviceslist", element: <Serviceslist /> },
      { path: "roleselection", element: <RoleSelection /> },
      { path: "dashboard", element: <DashboardLayout /> },
      { path: "customerprofileform", element: <CustomerProfileForm /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
