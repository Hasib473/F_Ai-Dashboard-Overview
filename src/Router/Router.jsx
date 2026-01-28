import { createBrowserRouter } from "react-router";
import RootPage from "../RootPage/RootPage";


export const router = createBrowserRouter([
  { path: "/", Component: RootPage },
]);