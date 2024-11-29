import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/work", element: <Work /> },
      { path: "/education", element: <Education /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);
