import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Hierarchy from "./pages/Hierarchy";
import Bulletin from "./pages/Bulletin.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/ColossalNotebook/",
    element: <App />,
    children: [
      { path: "/ColossalNotebook/", element: <Home /> },
      { path: "/ColossalNotebook/about", element: <About /> },
      { path: "/ColossalNotebook/contact", element: <Contact /> },
      { path: "/ColossalNotebook/hierarchy", element: <Hierarchy /> },
      { path: "/ColossalNotebook/*", element: <NoPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
