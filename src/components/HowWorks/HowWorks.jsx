
import './HowWorks.css'; 

const HowWorks = () => {
    return (
        <>
            <section className="howWorks-section">
                <div className="container">
                    <h2 className="heading-title text-center">
                        How It Works
                    </h2>

                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="dummy text-center">
                                <img src="https://cdn.venuelook.com/images/new-home-images/search.png" alt="" />
                                <h4 className='head_001'>Browse Venues</h4>
                                <p className="how_work_p">
                                Check out the best suited Venues, compare photos, special offers and function packages.
                                </p>
                            </div>
                        
                        </div>
                        <div className="col-lg-4">
                            <div className="dummy text-center">
                                <img src="https://cdn.venuelook.com/images/new-home-images/rupee.png" alt="" />
                                <h4 className='head_001'>Request Quotes</h4>
                                <p className="how_work_p">
                                Get custom quotes of your short-listed Venues at the click of GET FREE QUOTES button.
                                </p>
                            </div>
                        
                        </div>
                        <div className="col-lg-4">
                            <div className="dummy text-center">
                                <img src="https://cdn.venuelook.com/images/new-home-images/calender.png" alt="" />
                                <h4 className='head_001'>Book a Venue</h4>
                                <p className="how_work_p">
                                Select and Book the perfect venue in no time at all. Time is money, save both.
                                </p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowWorks;