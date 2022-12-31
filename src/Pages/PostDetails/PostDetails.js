import React, {useContext, useState} from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import {FaComment, FaHeart, FaRegHeart} from 'react-icons/fa'
import { AuthContext } from '../../context/AuthContext';
import { HiUserCircle } from 'react-icons/hi';



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
            
        <h2 className='text-left flex gap-4 text-lg font-bold p-6 whitespace-nowrap'><HiUserCircle className='text-3xl'></HiUserCircle>{name}</h2>
        <p className='p-6 text-2xl'>{textarea}</p>
        <figure className="px-10 pt-10">
        
        <PhotoProvider>
        <PhotoView src={image}>
            <img className='' src={image} alt="" />
        </PhotoView>
        </PhotoProvider>

       
        </figure>
        <div className="card-body items-center text-center">
        
        <div>
        <div className='grid grid-cols-3  items-center'>
            <div className='whitespace-nowrap flex justify-center items-center'>
            {
                didlike? 
                <FaHeart className='text-red-600 text-5xl' onClick={handleLike}></FaHeart>
                
                :
                <FaRegHeart className='text-red-600 text-5xl' onClick={handleLike}></FaRegHeart>
            }
            <p className='font-bold'>{likers} People Love</p>
            </div>
            <div>
            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box"> 
            <div >
                <FaComment className="collapse-title text-xl font-medium"></FaComment>
            </div>
            <div className="collapse-content"> 
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            </div> 
            </div>
            <div>
            <button className="btn btn-secondary">send</button>
            </div>
        </div>
        </div>
        </div>
        </div>

        </div>
    );
};

export default PostDetails;