import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className='mb-0'>
    <div className="footer-wrapper">

        <div className="footer-area">
        <div className="container">
            <div className="row">
            <div className="col-lg-4">
                <div className="single-footer-caption">
                <div className="footer-logo">
                    <Link to="/">
                    <h2 className='text-warning'>Tarteeb.</h2>
                    </Link>
                </div>
                <div className="footer-title">
                    <div className="footer-para">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, obcaecat
                       Lorem ipsum dolor sit amet
                    </p>
                    </div>
                </div>
                <div className="footer-social">
                    <a href="/"> <i className="fab fa-facebook"></i></a>
                    <a href="/"> <i className="fab fa-instagram"></i></a>
                    <a href="/"> <i className="fab fa-linkedin-in"></i></a>
                    <a href="/"> <i className="fab fa-youtube"></i></a>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-footer-caption">
                <div className="footer-title">
                    <h4>Link</h4>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Clubs</Link></li>
                    <li><Link to="/about">Contact</Link></li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="single-footer-caption">
                <div className="footer-title">
                    <h4>Contact us</h4>
                    <ul>
                    <li><a href="/">tarteeb@info.com</a></li>
                    <li><a href="/">Gulshan-2</a></li>
                    <li><a href="/">Navana FS Cosmo</a></li>
                    <li className="number"><a href="/">(812) 85760-0906</a></li>
                    
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>



        <div className="footer-bootom-area">
        <div className="container">
            <div className="footer-border">
            <div className="row d-flex align-items-center">
                <div className="col-lg-12">
                <div className="footer-copy-text text-center text-light p-0 m-0">
                    Copyright © 2023 All rights reserved | Tarteeb
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </footer>            
</>
  );
};

export default Footer;