import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Space from "./routes/Space.tsx";
import NamePopup from "./components/NamePopup.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/space",
        element: <Space />,
      },
      {
        path: "/name",
        element: <NamePopup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
   
  </React.StrictMode>
);
