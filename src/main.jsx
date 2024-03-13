import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <div>Hello From React Router</div>,
  },
  {
    path: "/about",
    element: <div>I am in About Page</div>,
  },
  {
    path: "/contact",
    element: <div>Call me right now</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
