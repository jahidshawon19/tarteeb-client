import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

    if(user?.email){
        return children
    }

    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;