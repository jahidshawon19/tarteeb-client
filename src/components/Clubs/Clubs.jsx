import Category from '../Category/Category';
import './Club.css';

const Clubs = () => {
    return (
        <>
            <section className="all-clubs">
                <div className="section-title text-center text-dark">
                    <h2>Top Conventions around the city</h2>
                    <span className="section-sub-title">
                    Most popular based on the chosen space type
                    </span>
                </div>

                <div className="container">
                    <Category></Category>
                </div>

                <div className="container">
                    <div className="row mt-2">

                        <div className="col-lg-3">
                        <div className="card">
                                <img className="card-img-top" src="https://lh3.googleusercontent.com/p/AF1QipNFH0t2-zvfjjuDgLQCRxbh1BhZOV0iEy9ds8Q-=s680-w480-h310" alt="Card image cap" />
                                <div className="card-body text-center">
                                    <h6 className="card-title text-dark club-title">International Convention Center</h6>
                                    <a href="#" className="venu-details-link">Details</a>
                                </div>
                                </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="card">
                                <img className="card-img-top" src="https://lh3.googleusercontent.com/p/AF1QipNFH0t2-zvfjjuDgLQCRxbh1BhZOV0iEy9ds8Q-=s680-w480-h310" alt="Card image cap" />
                                <div className="card-body text-center">
                                    <h6 className="card-title text-dark club-title">International Convention Center</h6>
                                    <a href="#" className="venu-details-link">Details</a>
                                </div>
                                </div>
                        </div>

                        <div className="col-lg-3">
                        <div className="card">
                                <img className="card-img-top" src="https://lh3.googleusercontent.com/p/AF1QipNFH0t2-zvfjjuDgLQCRxbh1BhZOV0iEy9ds8Q-=s680-w480-h310" alt="Card image cap" />
                                <div className="card-body text-center">
                                    <h6 className="card-title text-dark club-title">International Convention Center</h6>
                                    <a href="#" className="venu-details-link">Details</a>
                                </div>
                                </div>
                        </div>

                        <div className="col-lg-3">
                        <div className="card">
                                <img className="card-img-top" src="https://lh3.googleusercontent.com/p/AF1QipNFH0t2-zvfjjuDgLQCRxbh1BhZOV0iEy9ds8Q-=s680-w480-h310" alt="Card image cap" />
                                <div className="card-body text-center">
                                    <h6 className="card-title text-dark club-title">International Convention Center</h6>
                                    <a href="#" className="venu-details-link">Details</a>
                                </div>
                                </div>
                        </div>

                        
                    </div>
                </div>


            
            </section>


       
        </>
    );
};

export default Clubs;