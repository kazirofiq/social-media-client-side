import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CreatePost = () => {
    return (
        <div className="card w-1/2 mx-auto my-20 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-3xl">Create A Post:</h2>
          <p>To create a post you must <span className='text-sky-500 text-lg font-bold'><Link to='/addpost'>Login</Link></span> first </p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    );
};

export default CreatePost;