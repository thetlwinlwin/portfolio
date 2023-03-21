import HomePage from "./components/home/home";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./components/error/error_page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
