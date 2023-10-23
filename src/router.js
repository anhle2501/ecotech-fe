import {
    createBrowserRouter,

  } from "react-router-dom";
import { App } from "./app";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/customer",
        element: <App/>,
    },
  ]);

export default router;