import { useContext } from 'react';
import './Login.css';
import { AuthContext } from '../../context/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";


const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const redirectedURL = location.state?.from?.pathname || '/'

    const handleLogin = (e)=>{
        e.preventDefault()

        const email = e.target.email.value;
        const passsword = e.target.password.value; 

        loginUser(email, passsword)
        .then(result=>{
            e.target.reset()
            navigate(redirectedURL, {from: true})
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <>
            <div className="container-fluid main-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-5 col-lg-4 login-panel">
                        <div className="brand-logo text-center">
                            {/* <img src="https://koder.top/demo/authfy/demo/images/brand-logo.png" width="150" alt="" /> */}
                            <h2 className='text-warning font-weight-bold'>Tarteeb.</h2>
                        </div>
                        <div className="tarteeb-login">
                            <div className="tarteeb-panel-login text-center">
                                <div className="tarteeb-heading">
                                    <h3 className="auth-title">
                                    Login to your account
                                    </h3>
                                    <p>Don’t have an account? <Link to="/register">Sign Up Free</Link></p>
                                </div>

                                <div className="row social-button">
                                    <div className="col-xs-4 col-sm-4">
                                        <a href="" className="btn btn-lg btn-block btn-primary">
                                            <FaFacebookF></FaFacebookF>
                                        </a>
                                    </div>
                                    <div className="col-xs-4 col-sm-4">
                                        <a href="" className="btn btn-lg btn-block btn-info">
                                            <FaTwitter></FaTwitter>
                                        </a>
                                    </div>
                                    <div className="col-xs-4 col-sm-4">
                                        <a href="" className="btn btn-lg btn-block btn-danger">
                                            <FaGooglePlusG></FaGooglePlusG>
                                        </a>
                                    </div>
                                </div>

                                <div className="row loginOR">
                                    <div className="col-xs-12 col-sm-12">
                                        <span className="spanOr">OR</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <form  className="loginForm" onSubmit={handleLogin}>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email address" name="email"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password" name="password"/>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary btn-block" type='submit'>Login with Email</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-7 col-lg-8 auth-panel-right">
                        <div className="row">
                            <div className="col-lg-12 hero-heading">
                                <h3 className="hero-heading-title">Welcome to Tarteeb Venue Booking Site</h3>
                                <p>Explore And Reserve Stunning Venues With Ease!</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
             </div>
        </>
    );
};

export default Login;