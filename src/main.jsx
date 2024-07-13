import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Notebook from "./pages/Notebook.jsx";
import NonAka from "./pages/NonAka.jsx";
import Bulletin from "./pages/Bulletin.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/ColossalNotebook/",
    element: <App />,
    children: [
      { path: "/ColossalNotebook/", element: <Home /> },
      { path: "/ColossalNotebook/about", element: <About /> },
      { path: "/ColossalNotebook/bulletin", element: <Bulletin /> },
      { path: "/ColossalNotebook/notebook", element: <Notebook /> },
      { path: "/ColossalNotebook/non-aka", element: <NonAka /> },
      { path: "/ColossalNotebook/*", element: <NoPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
