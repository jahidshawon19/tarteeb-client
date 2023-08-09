import { useLoaderData } from "react-router-dom";
import DetailsBanner from "../DetailsBanner/DetailsBanner";

import './DetailsVenu.css'; 
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const DetailsVenu = () => {
    const venuData = useLoaderData()
    const {_id,club_name,location,capacity,rent,contact,description, img}= venuData
    const {user} = useContext(AuthContext)

    const handleBookingVenue = e =>{

        e.preventDefault(); 

        const club = club_name
        const clientName = e.target.clientName.value;
        const phone = e.target.phoneNumber.value;
        const date = e.target.eventDate.value;
        const event = e.target.event.value;

        const booking = {
            club_id:_id,
            club,
            img,
            clientName,
            phone,
            date,
            event,
            email: user?.email
        }
        
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
    })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Booking Submitted')
            }
        })
    }
    return (
        <>
            <DetailsBanner venueData={venuData}></DetailsBanner>

            <section className="venue- details-section py-5">
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="text-warning">Welcome to {club_name}</h4>

                     
                            <p className="venue-details-text text-justify">
                                    {description}
                            </p>
                        </div>

                        <div className="col-lg-6">
                        <div className="card information-card" >
                                <div className="card-header">
                                    <button className="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModal">Request for Booking</button>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Location: {location}</li>
                                    <li className="list-group-item">Capacity:  {capacity}</li>
                                    <li className="list-group-item">Phone: {contact}</li>
                                    <li className="list-group-item">Floor Rent: {rent} BDT</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Booking Form</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleBookingVenue}>
                                            <div className="form-group">
                                                <input type="text" name="clientName" className="form-control" placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="phoneNumber" className="form-control" placeholder="Phone Number" maxLength={11}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="date" name="eventDate" className="form-control" placeholder="Event Date"/>
                                            </div>
                                            <div className="form-group">
                                            <select className="form-control" name="event">
                                            <option>Weeding</option>
                                            <option>Corporate Event</option>
                                            <option>Birthday</option>
                                            <option>Holud Program</option>
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