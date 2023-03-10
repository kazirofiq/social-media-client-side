import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddPost from './AddPost/AddPost';
import AllPost from './AllPost/AllPost';


const Home = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div>
            
            
            {
                user?.email ?
                
                <AddPost></AddPost>
                :
                <>
                <h2 className='text-5xl text-center font-bold my-8'>Create A Posrt</h2>
                <h2 className='text-2xl text-center'>create post must <span className='text-teal-600 text-3xl font-bold'><Link to='/login'>Login </Link></span> first</h2>
                </>
            }
            <AllPost></AllPost>
        </div>
    );
};

export default Home;