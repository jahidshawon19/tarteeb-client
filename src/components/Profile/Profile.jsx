import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/userContext";
import './Profile.css'
import { FaEnvelope, FaFirstOrder, FaMoneyCheckAlt } from "react-icons/fa";



const Profile = () => {
    const {user} = useContext(AuthContext)
    const [order, setOrder] = useState([])
    const [totalRent, setTotalRent] = useState(0)



   


    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
            })
        
    },[])

    useEffect(()=>{
        const total = order.reduce((sum, od) => sum + od.rent, 0);
        setTotalRent(total);
    },[order])

 

    const handleCancelOrder = (id) => {
        const proceed = confirm('Are you sure to delete?')
        if(proceed){
            fetch(`http://localhost:5000/booking/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('Your Order Deleted Successfully')
                    const remainingOrder = order.filter(order => order._id !== id)
                    setOrder(remainingOrder)
                }
            })
        }

        
    };


  


 

 
    return (
        <>
      

      <section className="content-banner2" style={{ backgroundImage:"url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>

        <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-12">
            <div className="banner-con text-center">
                <p className="first-title mt-5">Customer Profile</p>
            </div>
        </div>
        </div>
        </div>
        </section>

            
            <section>
                <div className="container">

                    <div className="row">

                        <div className="col-lg-4">
                            <div className="card bg-danger py-2">
                                <div className="card-body text-light">
                                    <h1><FaEnvelope></FaEnvelope></h1>
                                    <span>{user?.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-primary py-2">
                                <div className="card-body text-light">
                                    <h1><FaFirstOrder></FaFirstOrder></h1><span>Order</span> <br />
                                    <span>{order.length}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-warning py-2">
                                <div className="card-body text-light">
                                    <h1><FaMoneyCheckAlt></FaMoneyCheckAlt></h1>
                                    <span>{totalRent} BDT</span>
                                </div>
                            </div>
                        </div>
                    </div>

              
            

                    <div className="row mt-5 ">
                        
                        <div className="col-lg-12">
                        
                         
                            <table className="table ">
                                <thead className="thead-dark">
                                    <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Club</th>
                                    <th scope="col">Event</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Rent</th>
                           
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {
                                    order.map(od=>(
                                        <tr key={od._id}>
                                        <td><img src={od.img} alt="" style={{height:'50px', width:'50px'}} /></td>
                                        <th>{od.club}</th>
                                        <td>{od.event}</td>
                                        <td>{od.date}</td>
                                        <td>{od.rent} BDT</td>
                                        
                                        
                                    
                                        <td><button onClick={()=>handleCancelOrder(od._id)} className="btn btn-danger btn-sm">Cancel</button></td>
                                        
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


