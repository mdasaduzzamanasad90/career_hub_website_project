import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobDetails from "./Components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/AppliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
