import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductList from "./productListing.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";















createRoot(document.getElementById("root")).render(
    <StrictMode>
           <RouterProvider router={router} />

    </StrictMode>
);
