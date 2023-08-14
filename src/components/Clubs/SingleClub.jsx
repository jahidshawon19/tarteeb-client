
import { Link } from 'react-router-dom';
import './Club.css'; 

const SingleClub = ({clubData}) => {
    const {_id,img, club_name, rent} = clubData
    return (
        <>
                <div className="col-lg-3 mt-4">
                        <div className="card">
                                <img className="card-img-top" src={img} alt="Card image cap" />
                                <div className="card-body text-center">
                                    <h6 className="card-title text-dark club-title">{club_name}</h6>
                                    <Link to={`/details/${_id}`} className="venu-details-link">Details</Link>
                                    <p className='text-secondary floor-rent'>Floor Rent: {rent} Taka</p>
                                </div>
                                </div>
                </div>
        </>
    );
};

export default SingleClub;