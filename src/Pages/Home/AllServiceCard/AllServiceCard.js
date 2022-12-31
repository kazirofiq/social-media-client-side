import React from 'react';
import {  HiUserCircle  } from "react-icons/hi";

import { Link } from 'react-router-dom';

const AllServiceCard = ({serv}) => {
    const {_id, image,textarea, name, email} = serv;
    return (
        <div>
            
        <div className="card card-compact w-full bg-base-300 shadow-black">
        <h2 className='text-left flex gap-4 text-lg font-bold p-6 whitespace-nowrap'><HiUserCircle className='text-3xl'></HiUserCircle>{name}</h2>
        {
            textarea.length > 10 ?
            <p className='p-6 text-2xl' >{textarea.slice(0, 100) + '...'} <Link className='text-red-600' to={`/checkout/${_id}`}>Read More...</Link></p>
            :
            <p className='p-6'>{textarea}</p>
        }
        {/* <h2 className="card-title">{textarea}</h2> */}
        <figure>
            
            <img className='w-full' src={image} alt="" />
            
            </figure>
        <div className="card-body">
        
        
       
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