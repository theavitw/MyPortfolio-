import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Pages/Contact";
import Python from "./Pages/Python";
import Java from "./Pages/Java";
// import HAC from "./Pages/HAC";
// import Jsx from "./Pages/Jsx";
// import Eact from "./Pages/Eact";
// import Addon from "./Pages/Addon";
import "bootstrap/dist/css/bootstrap.min.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "App",
    element: <App />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Python",
    element: <Python />,
  },
  {
    path: "Java",
    element: <Java/>,
  },
  
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
