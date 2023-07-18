import { createBrowserRouter } from "react-router-dom";
import NotFound from "../page/NotFound";
import App from "../App";
import Home from "../page/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
