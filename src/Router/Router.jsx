import { createBrowserRouter } from "react-router";
import RootPage from "../RootPage/RootPage";
import DashboardHome from "../Pages/DashboadHome/DashboardHome";


export const router = createBrowserRouter([
  { path: "/", Component: RootPage ,
    children: [
        {
            index: true, Component: DashboardHome
        }
    ]
  },
]);