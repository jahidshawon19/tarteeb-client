import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import DetailsVenu from "../components/DetailsVenu/DetailsVenu";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Contact from "../components/Contact/Contact";
import NotFound from "../components/NotFound/NotFound";

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
                path:'/details/:id',
                element: <PrivateRoute><DetailsVenu></DetailsVenu></PrivateRoute>,
                loader: ({params})=>fetch(`https://tarteeb-server.vercel.app/club/${params.id}`)
            },
            {
                path:'/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:"*",
                element: <NotFound></NotFound>
            }

        
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