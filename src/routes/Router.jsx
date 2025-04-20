import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Destination from "../Pages/Destination";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import Trevel from "../Pages/Trevel";
import PackageDetails from "../Components/PackageDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/destination",
                element:<Destination/>,
            },
            {
                path:"/gallery",
                element:<Gallery/>,
            },
            {
                path:"/trevel",
                element:<Trevel/>
            },
            {
                path:"/trevel/:id",
                element:<PackageDetails/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }

        ]
    }
])