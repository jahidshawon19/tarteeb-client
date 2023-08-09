import { useContext, useEffect, useState } from "react";
import SecondNavbar from "../Shared/SecondNavbar/SecondNavbar";
import { AuthContext } from "../../Context/userContext";


const Profile = () => {
    const {user} = useContext(AuthContext)
    const [order, setOrder] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    return (
        <>
            <SecondNavbar></SecondNavbar>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="text-secondary">Proma Barua</h4>
                        </div>
                    </div>

                    <div className="row">
                        
                        <div className="col-lg-12">
                        <h6 className="text-warning text-center">My Orders: {order.length}</h6>
                        <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Club</th>
                                    <th scope="col">Event</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {
                                    order.map(od=>(
                                        <tr>
                                        <td><img src={od.img} alt="" style={{height:'50px', width:'50px'}} /></td>
                                        <th>{od.club}</th>
                                        <td>{od.event}</td>
                                        <td>{od.date}</td>
                                        
                                        <td><button className="btn btn-danger">Pending</button></td>
                                        </tr>
                                    ))
                          
                                }

                          
                                </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;