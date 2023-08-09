
import { useContext } from "react";

import './Register.css'
import { AuthContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import SecondNavbar from "../Shared/SecondNavbar/SecondNavbar";



const Register = () => {
    
    const {registerUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault()

        const userName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value; 
        const confirmPassword = e.target.confirmPassword.value;

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

        <SecondNavbar></SecondNavbar>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <div className="login-page-img">
                                <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740&t=st=1691394318~exp=1691394918~hmac=2c275fe755643ff986b57a813013d1203c576233a2c6ee3fc91ce51449342ef8" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 mt-2">
                            <div className="login-form">
                            <form onSubmit={handleRegister}>

                                <div className="form-group">  
                                    <input type="text" className="form-control" name="userName" placeholder="Full Name" />
                                </div>
                                <div className="form-group">  
                                    <input type="email" className="form-control" name="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">  
                                    <input type="password" className="form-control" name="password" placeholder="Password" />
                                </div>
                                <div className="form-group">  
                                    <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                                </div>

                                    <button className='btn btn-warning btn-block' type="submit">Create Account</button>
                                    <button className='btn btn-danger btn-block'>Sign in with Google</button>
                                    <small>Already have an account? <Link to="/login">Register</Link></small>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;