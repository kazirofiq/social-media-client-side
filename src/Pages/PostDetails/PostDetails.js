import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const {_id, title, price, img, description } = useLoaderData();
    return (
        <div>
           
        <div className="card w-9/12 bg-base-300 shadow-xl mx-auto mt-10 mb-20">
        <figure className="px-10 pt-10">
        
        <PhotoProvider>
  <PhotoView src={img}>
    <img src={img} alt="" />
  </PhotoView>
</PhotoProvider>

        {/* <img src={img} alt="Shoes" className="rounded-xl" /> */}
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className='text-red-600'>Price:{price}</p>
        </div>
        </div>

        </div>
    );
};

export default PostDetails;