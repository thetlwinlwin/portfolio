import HomePage from "./components/home/home";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./components/error/error_page";
import ResponsiveStudy from "./components/case_studies/responsive_study";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/case-study/reponsive',
    element: <ResponsiveStudy />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
