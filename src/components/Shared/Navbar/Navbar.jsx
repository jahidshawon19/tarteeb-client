
import './Navbar.css'; 

const Navbar = () => {
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
              <a className="nav-link" href="#">Home</a>
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

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Jhon
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Founder</a>
                  <a className="dropdown-item" href="#">Group at a Glance</a>
                  <a className="dropdown-item" href="#">Mission & values</a>
                  <a className="dropdown-item" href="#">Board of Directors</a>
                  <a className="dropdown-item" href="#">Key Management</a>
                </div>
              </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="header-btn my-2 my-sm-0" type="submit">Create account</button>
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