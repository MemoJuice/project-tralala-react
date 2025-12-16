import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Products from "./views/Products";
import ProductDetail from "./views/ProductDetail";
import FetchAPI_EmptyArray from "./views/FetchAPI_EmptyArray";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="mind-h-screen flex justify-conter items-center">
        <h1 className="text-4xl">404 - Page Not Found 🤒</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "FetchAPI_EmptyArray", element: <FetchAPI_EmptyArray /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
