import { createBrowserRouter } from "react-router-dom";
import NotFound from "../page/NotFound";
import App from "../App";
import Home from "../page/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllBooks from "../components/AllBooks/AllBooks";
import BookDetails from "../components/AllBooks/BookDetails/BookDetails";
import PrivateRoute from "./PrivateRoute";
import AddNewBook from "../components/AllBooks/AddNewBook/AddNewBook";
import EditBook from "../components/AllBooks/EditBook/EditBook";
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
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/addNewBook",
        element:
        <PrivateRoute>
          <AddNewBook />
        </PrivateRoute>
      },
      {
        path: "/editBook/:id",
        element:
        <PrivateRoute>
          <EditBook />
        </PrivateRoute>
      },
      {
        path: "/book-detail/:id",
        element:
        <PrivateRoute>
          <BookDetails />,
        </PrivateRoute>
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
