import DetailsBanner from "../DetailsBanner/DetailsBanner";

import './DetailsVenu.css'; 

const DetailsVenu = () => {
    return (
        <>
            <DetailsBanner></DetailsBanner>

            <section className="venue- details-section py-5">
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="text-warning">Welcome to International Convention Center</h4>

                     
                            <p className="venue-details-text text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid excepturi delectus placeat sit. Eaque mollitia asperiores aliquam sed labore voluptatibus consectetur consequuntur ad quae sunt praesentium assumenda incidunt maxime, culpa officia consequatur iusto sint cupiditate. Consequatur, alias eligendi beatae natus asperiores eum saepe modi est perferendis, animi ex voluptatum.
                            </p>
                        </div>

                        <div className="col-lg-6">
                        <div className="card information-card" >
                                <div className="card-header">
                                    <button className="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModal">Request for Booking</button>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Location: 281 Chatteswari Road, Chattogram 4000</li>
                                    <li className="list-group-item">Capacity:  5000</li>
                                    <li className="list-group-item">Phone: 01886972211</li>
                                    <li className="list-group-item">Floor Rent: 2,20,000 BDT</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Booking Form</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone Number" maxLength={11}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="date" className="form-control" placeholder="Event Date"/>
                                            </div>
                                            <div className="form-group">
                                            <select className="form-control">
                                            <option>Weeding</option>
                                            <option>Corporate Event</option>
                                            <option>Birthday</option>
                                            <option>Engagement</option>
                                            <option>Others</option>
                                            </select>
                                            </div>

                                        <button type="submit" className="btn btn-danger">Submit Order</button>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                 
                                </div>
                                </div>
                            </div>
            </div>

                </div>
            </section>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src="https://lh3.googleusercontent.com/p/AF1QipN5kaDIxg4AIN3GeqS6VJpiBwgVZu5PCEgtFf4B=s680-w680-h510" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-3">
                            <img src="https://lh3.googleusercontent.com/p/AF1QipPWeRmHmkg15vfgPQYWi4dZQb8clmUs6u7emaJE=s680-w680-h510" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-3">
                            <img src="https://lh3.googleusercontent.com/p/AF1QipOJ61x8k9118dwi6wMvSB6QXwpafXRs1aKbQ_IC=s680-w680-h510" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-3">
                            <img src="https://lh3.googleusercontent.com/p/AF1QipO8S3rmQ6oXd0jSxEwege6aMeLXQF_k0We8bpJV=s680-w680-h510" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailsVenu;