import React from 'react';

import { Link } from 'react-router-dom';

const AllServiceCard = ({serv}) => {
    const {_id, image,textarea, name, email} = serv;
    return (
        <div>
            
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <h2 className='text-left text-lg font-bold pl-6'>{name}</h2>
        <h2 className="card-title">{textarea}</h2>
        <figure>
            
            <img className='w-full' src={image} alt="" />
            
            </figure>
        <div className="card-body">
        
        
        {/* {
            description.length > 10 ?
            <p>{description.slice(0, 100) + '...'} <Link className='text-red-600' to={`/checkout/${_id}`}>Read More...</Link></p>
            :
            <p>{description}</p>
        } */}
        <div className="card-actions justify-end">
        <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary"> View details</button>
        </Link>
        </div>
        </div>
        </div>
    </div>
       
    );
};

export default AllServiceCard;