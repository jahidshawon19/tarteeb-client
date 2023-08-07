import { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Club.css';
import SingleClub from './SingleClub';


const Clubs = () => {
    const [clubs, setClubs] = useState([])
    useEffect(()=>{
        fetch('club.json')
        .then(res=>res.json())
        .then(data =>{
            setClubs(data)
        })
    },[])
    return (
        <>

                   
            <section className="all-clubs mb-5">
                <Category></Category>
                <div className="section-title text-center text-dark mb-5">
                    <h2>Top Conventions around the city</h2>
                    <span className="section-sub-title">
                    Most popular based on the chosen space type
                    </span>
                </div>



                <div className="container">
                    <div className="row mt-2">
                        {
                            clubs.map(club=><SingleClub
                                key={club.club_id}
                                clubData = {club}
                            ></SingleClub>)
                        }        
                    </div>
                </div>


            
            </section>


       
        </>
    );
};

export default Clubs;