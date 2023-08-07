import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import DetailsVenu from "../components/DetailsVenu/DetailsVenu";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

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
            },
        ],
      
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }

])

export default router 