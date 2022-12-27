import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const SignUp = () => {
    const {createUser, updateUser,providerLogin} = useContext(AuthContext);
    const [signUpError, setSignUoError] = useState('');

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const googleProvider = new GoogleAuthProvider();
    // const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // if(token){
    //     navigate('/');
    // }
    const handleSignUp = data =>{
        setSignUoError();
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('User Created Successfully.')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{
                saveUser(data.name, data.email);
                
                
            })
            .catch(err => console.log(err));
        })
        .catch(error => {
            console.log(error)
            setSignUoError(error.message);
        });
      }
      const saveUser = (name, email) =>{
        const user = {name, email};
        fetch('https://car-server-kazirofiq.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
           
            
        })
    }

    const handleGoogleSign = () =>{
        
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
    
    
            const currentUser = {
                email: user.email
                
            }
    
            console.log(currentUser);
            navigate(from, {replace: true});
    
           
            
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px]  mx-auto flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-xl text-center font-bold'>SignUp</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {required: "Your Name is required" })} className="input input-bordered w-full max-w-xs " />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {required: "Email Address is required" })} className="input input-bordered w-full max-w-xs " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {required: "Password is Required",
                        minLength:{value: 6, message: 'Password must be 6 character'},
                        pattern: {value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, message: 'Password must uppercase number & special characters'}
                    })}
                     className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        
                    </div>
                    <input className='btn btn-accent w-full mt-4' type="submit" value='Sign Up'/>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>
                    <p>All ready have an account <Link className='text-secondary' to='/login'>Please Login</Link></p> 
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSign} className='uppercase btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                 </div>
             </div>
    );
};

export default SignUp;