
import { useContext } from 'react';
import './Navbar.css'; 
import { AuthContext } from '../../../Context/userContext';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogut =()=>{
    logOut()
    .then(()=>{})
    .catch(()=>{})
  }
    return (
        <>
 <header className="header">
        <div className="header-inner">
          <div className="container-fluid px-lg-5">
            <nav className="navbar navbar-expand-lg my-navbar">

         {/* <a className="navbar-brand" href="#"><span className="logo">
          <img src="#" className="img-fluid" style={{width:'30px', margin:'-3px 0px 0px 0px'}} /> White Square</span>
        </a>  */}

        <a className="navbar-brand" href="#"><span className="logo">Tarteeb.</span>
          </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{margin:'5px 0px 0px 0px'}}></i></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

      
              <li className="nav-item">
              <a className="nav-link" href="#">Clubs</a>
            </li>
       
       
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Career</a>
            </li>



            {
              user?.email?<li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user.email}
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
          <form className="form-inline my-2 my-lg-0">
            {
              !user?.email &&<Link className="header-btn my-2 my-sm-0" type="submit" to="/register">Create account</Link>
            }
            
          </form>
        </div>
      </nav>
      
          </div>
        </div>
      
      
      </header>
        </>
    );
};

export default Navbar;