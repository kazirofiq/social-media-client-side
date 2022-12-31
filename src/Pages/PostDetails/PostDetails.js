import React, {useContext, useState} from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { AuthContext } from '../../context/AuthContext';



const PostDetails = () => {
    const {user} = useContext(AuthContext)
    const {_id, name, email, image,textarea, likerEmails} = useLoaderData();
    const [didlike, setDidLike] = useState(likerEmails?.includes(user?.email));
    const [likers, setLikers] = useState(likerEmails?.length || 0);
    
    

    const handleLike = () => {
        if(didlike){
            setDidLike(false)
        }
        else{
            setDidLike(true)
        }

        fetch(`https://social-media-server-kazirofiq.vercel.app/post/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json',
                
            },
            body: JSON.stringify({email: user?.email})

        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            setLikers(result.likers)
            
           
        })

    }
    return (
        <div>
           
        <div className="card w-9/12 bg-base-300 shadow-xl mx-auto mt-10 mb-20">
        <h2 className='text-left text-lg font-bold pl-6'>{name}</h2>
        <p>{textarea}</p>
        <figure className="px-10 pt-10">
        
        <PhotoProvider>
        <PhotoView src={image}>
            <img className='' src={image} alt="" />
        </PhotoView>
        </PhotoProvider>

       
        </figure>
        <div className="card-body items-center text-center">
        
        <div>
        <div>
            {
                didlike? 
                <FaHeart className='text-red-600 text-xl' onClick={handleLike}></FaHeart>
                
                :
                <FaRegHeart className='text-red-600 text-xl' onClick={handleLike}></FaRegHeart>
            }
            <p>{likers} People liked</p>
        </div>
        </div>
        </div>
        </div>

        </div>
    );
};

export default PostDetails;