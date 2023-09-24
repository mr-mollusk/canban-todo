import { createBrowserRouter } from "react-router-dom";
import { Project, ProjectList } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectList />,
  },
  {
    path: "/:projectId",
    element: <Project />,
  },
]);
