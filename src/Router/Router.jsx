import { createBrowserRouter } from "react-router";
import RootPage from "../RootPage/RootPage";
import DashboardHome from "../Pages/DashboadHome/DashboardHome";
import CallLogsHome from "../Pages/CallLogs/CallLogsHome";
import AppoinmentHome from "../Pages/Appoinment/AppoinmentHome";
import SettingsHome from "../Pages/Settings/SettingsHome";
import EditProfilePage from "../Pages/Editpages/EditProfilepage";


export const router = createBrowserRouter([
  { path: "/", Component: RootPage ,
    children: [
        {
            index: true, Component: DashboardHome
        },

        {
            path:'callogs', Component:CallLogsHome
        },

        {
            path:'appointment', Component: AppoinmentHome
        },

        {
            path:'settings', Component:SettingsHome
        },

        {
            path:'ediprofile', Component : EditProfilePage
        }
    ]
  },
]);