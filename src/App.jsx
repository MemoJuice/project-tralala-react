import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Caregiver from "./views/Caregiver";
import Services from "./views/Services";
import AdminManagement from "./views/AdminManagement";
import Checkout from "./views/Checkout";
import OrderConfirmation from "./views/OrderConfirmation";
import Login from "./views/Login";

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
      { path: "management", element: <AdminManagement />},
      { path: "checkout", element: <Checkout />},
      { path: "order_confirmation", element: <OrderConfirmation />},
      { path: "login", element: <Login /> }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
