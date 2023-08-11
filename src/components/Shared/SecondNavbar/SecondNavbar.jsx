import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/userContext";

const SecondNavbar = () => {

    const {user, logOut} = useContext(AuthContext)
    const handleLogut =()=>{
        logOut()
        .then(()=>{})
        .catch(()=>{})
      }
    return (
        <>
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Tarteeb.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Clubs</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Contact</Link>
                </li>
                {
              user?.email?<li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Profile
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <button className="dropdown-item btn btn-danger btn-sm" onClick={handleLogut}>Logout</button>
                <Link to="/profile" className='nav-link text-dark'>Profile</Link>
              </div>
              
            </li>
            :
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            }
          

                </ul>

            </div>
        </nav>
        </>
    );
};

export default SecondNavbar;