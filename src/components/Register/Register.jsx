
import { useContext, useState } from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import './Register.css'
import { AuthContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

        
    const {registerUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const handleRegister = (e)=>{
        e.preventDefault()

        const userName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value; 
        const confirmPassword = e.target.password2.value;

        if(password === confirmPassword){
            registerUser(email, password)
            .then(result=>{
                navigate('/')
                e.target.reset()
    
            })
            .catch(err=>{
                setErrorMessage(err.message)
            })
        }
        else{
            setErrorMessage('Password Does Not Match')
            return
        }

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
                                    Create to your account
                                    </h3>
                                    <p className="signUpText">Already Registered? <Link to="/login">Sign In Now</Link></p>
                                </div>

                                <div className="row social-button">
                                    <div className="col-xs-4 col-sm-4">
                                        <a href="" className="btn btn-lg btn-block btn-primary authBTN">
                                            <FaFacebookF></FaFacebookF>
                                        </a>
                                    </div>
                                    <div className="col-xs-4 col-sm-4">
                                        <a href="" className="btn btn-lg btn-block btn-info authBTN">
                                            <FaTwitter></FaTwitter>
                                        </a>
                                    </div>
                                    <div className="col-xs-4 col-sm-4">
                                        <a href="" className="btn btn-lg btn-block btn-danger authBTN">
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

                                  {errorMessage && (
                                        <div className="alert alert-danger" role="alert">
                                            {errorMessage}
                                        </div>
                                    )}
                                    <div className="col-xs-12 col-sm-12">
                                        <form  className="loginForm" onSubmit={handleRegister}>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Full Name" name="userName"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email address" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password"  name="password" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Confirm Password"  name="password2" />
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary btn-block" type="submit">Sign up with Email</button>
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

export default Register;