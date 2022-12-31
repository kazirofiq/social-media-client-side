import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';


const AddPost = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const navigate = useNavigate();
    

    const handleAddProduct = data =>{
        
        console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
            })
            .then((res) => res.json())
            
            .then(imgData =>{
                if(imgData.success){
                    const post = {
                        name: user?.displayName,

                        textarea: data.textarea,
                        email: user?.email,
                        price: data.price,
                        image:imgData.data.url
                    }
                    //  save cars information to the database
                    fetch('https://social-media-server-rho.vercel.app/post',{
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json',
                            
                        },
                        body: JSON.stringify(post)
                    })
                    .then(res => res.json())
                    .then(result =>{
                        console.log(result);
                        toast.success(`${data.textarea} is added successfully`);
                        navigate('/media');
                       
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    return (
        <div className='w-1/2 p-8 mx-auto'>
        <h2 className="text-4xl">Create A Post</h2>
        <form className='w-full'
         onSubmit={handleSubmit(handleAddProduct)}
         >
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Post</span></label>
                    <textarea className="textarea textarea-bordered" placeholder="Bio" {...register("textarea", {required: "Your text is required" })}>
                    {errors.textarea && <p className='text-red-600' role="alert">{errors.textarea?.message}</p>}
                    </textarea>
                    {/* <input type="textarea" {...register("textarea", {required: "Your text is required" })} className="input input-bordered w-full textarea textarea-bordered " />
                    {errors.textarea && <p className='text-red-600' role="alert">{errors.textarea?.message}</p>} */}
                    
                </div>
                

                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {required: "Your Photo is required" })} className="file-input file-input-bordered w-full " />
                    {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-4' type="submit" value='Post'/>
                
                </form>
    </div>
    );
};

export default AddPost;