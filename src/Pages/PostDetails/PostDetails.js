import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const {_id, title, price, image, description } = useLoaderData();
    return (
        <div>
           
        <div className="card w-9/12 bg-base-300 shadow-xl mx-auto mt-10 mb-20">
        <figure className="px-10 pt-10">
        
        <PhotoProvider>
        <PhotoView src={image}>
            <img className='' src={image} alt="" />
        </PhotoView>
        </PhotoProvider>

       
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        
        </div>
        </div>

        </div>
    );
};

export default PostDetails;