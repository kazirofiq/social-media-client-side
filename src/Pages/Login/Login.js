import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {userLogin, providerLogin} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data =>{
        
        console.log(data);
        setLoginError();
        userLogin(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setLoginUserEmail(data.email);
            navigate(from, {replace: true});   
                       
            
           
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message)
        });
    }

    const handleGoogleSign = () =>{
        
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            
    
            const currentUser = {
                email: user.email,
                name: user.displayName,
                image: user.photoURL
                
            }
            fetch('https://social-media-server-kazirofiq.vercel.app/user', {

                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                    
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
                    .then(result =>{
                       navigate(from, {replace: true});   
                       
                    })
    
            
            
    
            // get jwt token
        //     fetch('https://food-delevery-server-servoce.vercel.app/jwt', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(currentUser)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             // local storage is the easiest but not the best place to store jwt token
        //             localStorage.setItem('genius-token', data.token);
        //             navigate(from, { replace: true });
        //         });
            
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px]  mx-auto flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-xl text-center font-bold'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email", {required: "Email Address is required" })} className="input input-bordered w-full max-w-xs " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {required: "Password is Required",
                        minLength:{value: 6, message: 'Password must be 6 character'}
                    })}
                     className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value='Login'/>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </form>
                    <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p> 
                    <div className="divider">OR</div>
                    <button 
                    onClick={handleGoogleSign}
                     className='uppercase btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                 </div>
             </div>
    );
};

export default Login;