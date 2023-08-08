
import './DetailsBanner.css'; 

const DetailsBanner = ({venueData}) => {
    const {img, club_name} = venueData
    return (
        <>
                <section className="content-banner2" style={{ backgroundImage: `url('${img}')` }}>

                <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                    <div className="banner-con text-center">
                        <p className="first-title mt-5">{club_name}</p>
                    </div>
                </div>
                </div>
                </div>
                </section>
        </>
    );
};

export default DetailsBanner;