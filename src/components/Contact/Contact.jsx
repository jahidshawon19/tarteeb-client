
import './Contact.css';

const Contact = () => {
    return (
        <>
               <section className="content-banner2">

                        <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-12">
                            <div className="banner-con text-center">
                                <p className="first-title mt-5"> Contact Us</p>
                            </div>
                        </div>
                        </div>
                        </div>
                        </section>
             
            <section className="checkout-form-section py-5">
            <div className="container">
                <h2 className="checkout-form-title text-center"><span> Feel Free to Contact</span>
                <br />Get in Touch</h2>
                <div className="row mt-5">
                <div className="col-lg-5">
                    <div className="subtitle-text">
                    <h2>Welcome to our Club Reservation website!</h2>
                    <p className="text-secondary"> If you have any questions, suggestions, or would like to get in touch with us, please feel free to reach out. We're here to assist you and make your club reservation experience as smooth as possible. Here's how you can contact us</p>

                    <p className='text-secondary'>If you prefer, you can also send us a message using the contact form below. Simply provide your name, email address, subject, and your message, and we'll get back to you as soon as possible</p>
                    </div>

                </div>
                <div className="col-lg-7">
                    <div className="checkout-form">
                    <form action="">
                        <div className="inner-checkout-form">
                        
                       
                      
                        <div className="form-group">
                            <label >
                            <i className="fas fa-user"></i>
                            </label>
                            <span><input type="text"  placeholder="Full Name"/></span>
                        </div>
                        <div className="form-group">
                            <label  >
                            <i className="fas fa-envelope"></i>
                            </label>
                            <span><input type="text" placeholder="Email"/></span>
                        </div>
                        <div className="form-group">
                            <label  >
                            <i className="fas fa-phone"></i>
                            </label>
                            <span><input type="text" placeholder="Phone"/></span>
                        </div>

                        <div className="form-group">
                            
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <a href="/" className="btn btn-primary mb-4 btn-block">Submit</a>
                        </div>
                        
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </section>               
       
        </>
    );
};

export default Contact;