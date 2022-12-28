import React, { useState } from 'react';

const AddPost = () => {
    const [user, setUser] = useState({});
    const handleServiceSubmit = event =>{
        event.preventDefault();
        console.log(user)

        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User added successfully')
                event.target.reset();
            }
        })
    }

    const handleBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser)
    }
    return (
        <div className='p-20 my-10  w-1/4  bg-slate-300 mx-auto'>
            <form className='' 
            onSubmit={handleServiceSubmit} 
             >

            
            
            
            
            <br />
            <textarea
             onBlur={handleBlur}
              required name='description' className="textarea w-full max-w-xs textarea-error mb-4" placeholder="description"></textarea>
              <br />
            <input
             onBlur={handleBlur} 
             required name='img' type="text" placeholder="Your Image Link" className="input input-bordered input-error w-full max-w-xs mb-4" />
            <br />

            <button className='w-full max-w-xs btn btn-outline btn-accent' type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddPost;