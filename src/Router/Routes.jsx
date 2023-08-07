import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import DetailsVenu from "../components/DetailsVenu/DetailsVenu";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details',
                element: <DetailsVenu></DetailsVenu>
            }
        ]

    }
])

export default router 