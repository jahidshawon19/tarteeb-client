import './Advertisement.css'

const Advertisement = () => {
    return (
        <>

        

            <section className="home-advertisement py-3 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 adv-img">
                            <img src="https://www.venuelook.com/images/new-home-images/dsetination.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 mt-5">
                            <h3 className="home-adv-title">Events & Wedding Destinations in Chittagong</h3>
                            <p className="DESTP_pp">Your next destination is closer than you think.<br/>
                            Discover it here.
                            </p>

                            <button className="btn btn-block btn-lg btn-outline-danger">See all Destinations</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Advertisement;