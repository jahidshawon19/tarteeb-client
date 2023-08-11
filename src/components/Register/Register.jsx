
import { useContext } from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import './Register.css'
import { AuthContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";




// const Register = () => {

//     return (
//         <>

//         <SecondNavbar></SecondNavbar>
//             <section>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-6 mt-5">
//                             <div className="login-page-img">
//                                 <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740&t=st=1691394318~exp=1691394918~hmac=2c275fe755643ff986b57a813013d1203c576233a2c6ee3fc91ce51449342ef8" className="img-fluid" alt="" />
//                             </div>
//                         </div>
//                         <div className="col-lg-1"></div>
//                         <div className="col-lg-5 mt-2">
//                             <div className="login-form">
//                             <form onSubmit={handleRegister}>

//                                 <div className="form-group">  
//                                     <input type="text" className="form-control" name="userName" placeholder="Full Name" />
//                                 </div>
//                                 <div className="form-group">  
//                                     <input type="email" className="form-control" name="email" placeholder="Enter email" />
//                                 </div>
//                                 <div className="form-group">  
//                                     <input type="password" className="form-control" name="password" placeholder="Password" />
//                                 </div>
//                                 <div className="form-group">  
//                                     <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
//                                 </div>

//                                     <button className='btn btn-warning btn-block' type="submit">Create Account</button>
//                                     <button className='btn btn-danger btn-block'>Sign in with Google</button>
//                                     <small>Already have an account? <Link to="/login">Register</Link></small>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Register;







const Register = () => {

        
    const {registerUser} = useContext(AuthContext)
    const navigate = useNavigate()

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
                console.log(err)
            })
        }
        else{
            return
        }

    }
    return (
        <>
            <div className="container-fluid main-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-7 col-md-5 col-lg-4 login-panel">
                        <div className="brand-logo text-center">
                            <img src="https://koder.top/demo/authfy/demo/images/brand-logo.png" width="150" alt="" />
                        </div>
                        <div className="tarteeb-login">
                            <div className="tarteeb-panel-login text-center">
                                <div className="tarteeb-heading">
                                    <h3 className="auth-title">
                                    Create to your account
                                    </h3>
                                    <p>Already Registered? <Link to="/login">Sign In Now</Link></p>
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