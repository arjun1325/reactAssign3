import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductList from "./components/productListing.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import { Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom"; 
import ProductInfo from "./pages/productInfo.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,

    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/productinfo/:id",
        element: <ProductInfo />,
      },
    ],
  
  }
]);










createRoot(document.getElementById("root")).render(
    <StrictMode>
           <RouterProvider router={router} />

    </StrictMode>
);
