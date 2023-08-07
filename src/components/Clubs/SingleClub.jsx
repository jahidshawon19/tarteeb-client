
import './Club.css'; 

const SingleClub = ({clubData}) => {
    const {img, club_name} = clubData
    return (
        <>
                <div className="col-lg-3 mt-4">
                        <div className="card">
                                <img className="card-img-top" src={img} alt="Card image cap" />
                                <div className="card-body text-center">
                                    <h6 className="card-title text-dark club-title">{club_name}</h6>
                                    <a href="#" className="venu-details-link">Details</a>
                                </div>
                                </div>
                </div>
        </>
    );
};

export default SingleClub;