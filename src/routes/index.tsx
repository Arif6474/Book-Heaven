import { createBrowserRouter } from "react-router-dom";
import NotFound from "../page/NotFound";
import App from "../App";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
