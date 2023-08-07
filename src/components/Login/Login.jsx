import { useContext } from 'react';
import './Login.css';
import { AuthContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';


const Login = () => {
    const {loginUser} = useContext(AuthContext)

    const handleLogin = (e)=>{
        e.preventDefault()

        const email = e.target.email.value;
        const passsword = e.target.password.value; 

        loginUser(email, passsword)
        .then(result=>{
            console.log(result.user)
        })
        .catch(err=>{
            console.log(err)
        })

    }

 

    
    return (
        <>
       
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <div className="login-page-img">
                                <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740&t=st=1691394318~exp=1691394918~hmac=2c275fe755643ff986b57a813013d1203c576233a2c6ee3fc91ce51449342ef8" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-4 mt-5">
                            <div className="login-form">
                            <form onSubmit={handleLogin}>

                                <div className="form-group">  
                                    <input type="email" className="form-control" name="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">  
                                    <input type="password" className="form-control" name="password" placeholder="Password" />
                                </div>

                                    <button className='btn btn-warning btn-block' type='submit'>Login</button>
                                    <button className='btn btn-danger btn-block'>Sign in with Google</button>
                                    <small>New to Tarteeb? <Link to="/register">Register</Link></small>
                                </form>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;