
import React, { useEffect, useState } from 'react';
import AllServiceCard from '../AllServiceCard/AllServiceCard';




const AllPost = () => {
    const [service, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://social-media-server-rho.vercel.app/post')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
        <div>
            <h2 className='text-lg font-bold text-center my-10'>Top 3 Post</h2>
        </div>
       <div className='grid lg:w-1/2 md:w-2/3 mx-auto gap-4 px-10 my-10 grid-cols-1  '>
        
           {
               service.map(serv => <AllServiceCard
               key={serv._id}
               serv={serv}
               ></AllServiceCard>)
           }
       </div>
       
   </div>
    );
};

export default AllPost;