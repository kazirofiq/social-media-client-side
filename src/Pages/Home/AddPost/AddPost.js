import React from 'react';

const AddPost = () => {
    return (
        <div className='p-20 my-10  w-1/4  bg-slate-300 mx-auto'>
            <form className='' 
            // onSubmit={handleServiceSubmit} 
             >

            <input
            //  onBlur={handleBlur}
              required name='title' type="text" placeholder="Your Product Title"  className="input input-bordered input-error w-full max-w-xs my-4" />
            <br />
            <input
            //  onBlur={handleBlur} 
             required name='img' type="text" placeholder="Your Image Link" className="input input-bordered input-error w-full max-w-xs mb-4" />
            <br />
            <input
            //  onBlur={handleBlur} 
             required name='price' type="number" placeholder="Price" className="input input-bordered input-error w-full max-w-xs mb-4" />
            <br />
            <textarea
            //  onBlur={handleBlur}
              required name='description' className="textarea w-full max-w-xs textarea-error mb-4" placeholder="description"></textarea>
            <br />
            <button className='w-full max-w-xs btn btn-outline btn-accent' type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddPost;