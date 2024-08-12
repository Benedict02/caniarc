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
import Akacalc from "./pages/Akacalc.jsx";
import Archive from "./pages/Archive.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/caniarc/",
    element: <App />,
    children: [
      { path: "/caniarc/", element: <Home /> },
      { path: "/caniarc/about", element: <About /> },
      { path: "/caniarc/bulletin", element: <Bulletin /> },
      { path: "/caniarc/notebook", element: <Notebook /> },
      { path: "/caniarc/non-aka", element: <NonAka /> },
      { path: "/caniarc/akacalc", element: <Akacalc /> },
      { path: "/caniarc/archive", element: <Archive /> },
      { path: "/caniarc/*", element: <NoPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
