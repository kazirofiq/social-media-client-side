import { transparent } from 'daisyui/src/colors';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AboutDetails from './AboutDetails/AboutDetails';
import EditAbout from './EditAbout/EditAbout';

const About = () => {
    const [abouts, setAbout] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const user = useLoaderData();
    // useEffect(() =>{
    //     fetch('https://social-media-server-rho.vercel.app/about')
    //     .then(res => res.json())
    //     .then(data => setAbout(data))
    // }, [])
    return (
        <section className='py-16'>
           
            <div className="hero min-h-screen  bg-base-200">
            <div className="card flex-shrink-0 w-full p-20  shadow-2xl bg-base-100">
            
                <h2>{user?.length}</h2>
                {
                    user?.map(about => <AboutDetails
                    key={about._id}
                    about={about}
                    setTreatment={setTreatment}
                    ></AboutDetails>)
                }
                </div>
                {
                    treatment &&
                    <EditAbout
                treatment={treatment}
                ></EditAbout>
                }
            </div>
            </section>
    );
};

export default About;