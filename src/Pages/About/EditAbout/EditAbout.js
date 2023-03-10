import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const EditAbout = ({treatment}) => {
    const {_id, name, email, university, address} = treatment;
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    


    const handleUpdateBooking = event =>{
        event.preventDefault();
        // console.log(user)
        fetch(`https://social-media-server-rho.vercel.app/about/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('user update')
                navigate('/about');
            }
            console.log(data);
        })    
        }
    

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }    

    return (
        <>
           
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <form 
                    onSubmit={handleUpdateBooking}
                    >
                    <input onChange={handleInputChange} defaultValue={name} type="text" name='name' 
                    // value={date}
                     className="input input-bordered my-2 w-full " />
                    <input onChange={handleInputChange} defaultValue={email} type="text" name='email'  
                    // value={date}
                     className="input input-bordered my-2 w-full " />
                    <input onChange={handleInputChange} defaultValue={university} type="text" name='university' 
                    // value={date}
                     className="input input-bordered my-2 w-full " />
                    <input onChange={handleInputChange} defaultValue={address} type="text" name='address' 
                    // value={date}
                     className="input input-bordered my-2 w-full " />
                  
                     <br />
                     <Link to={`/about/${_id}`}></Link>
                     <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                     
                </div>
             </div> 
        </>
    );
};

export default EditAbout;