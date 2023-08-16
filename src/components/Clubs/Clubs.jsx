import { useEffect, useState } from 'react';
// import Category from '../Category/Category';
import './Club.css';
import SingleClub from './SingleClub';


const Clubs = () => {
    // const [clubs, setClubs] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [minRent, setMinRent] = useState('');
    const [maxRent, setMaxRent] = useState('');
    const [filteredClubs, setFilteredClubs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/clubs')
        .then(res=>res.json())
        .then(data =>{
            const filtered = data.filter(club => 
                club.club_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (minRent === '' || club.rent>= parseInt(minRent)) &&
                (maxRent === '' || club.rent<= parseInt(maxRent))
            );
            setFilteredClubs(filtered)
        })
    },[searchTerm, minRent, maxRent])



    return (
        <>

                   
            <section className="all-clubs py-5 mt-5">
                {/* <Category></Category> */}
                <div className="section-title text-center text-dark mb-5">
                    <h2>Top Conventions around the city</h2>
                    <span className="section-sub-title">
                    Most popular based on the chosen space type
                    </span>
                </div>




                <div className="container">
                <div className="row ml-4">

                  
                   
                        <div className="col-lg-4">
                            
                                    <input
                                                type="text"
                                                placeholder="Search by club name..."
                                                value={searchTerm}
                                                onChange={e => setSearchTerm(e.target.value)}
                                                className='form-control searchForm'
                                    />
                      
   
                            </div>
                  

                        <div className="col-lg-4">
                                <input
                                    type="number"
                                    placeholder="Min Rent"
                                    value={minRent}
                                    onChange={e => setMinRent(e.target.value)}
                                    className='form-control searchForm'
                                />

                              
                        </div>

                        <div className="col-lg-4">
                            <input
                                type="number"
                                placeholder="Max Rent"
                                value={maxRent}
                                onChange={e => setMaxRent(e.target.value)}
                                className='form-control searchForm'
                            />
             
                        </div>
                   

                </div>
                
                
                    <div className="row mt-2">
                        {
                            filteredClubs.map(club=><SingleClub
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