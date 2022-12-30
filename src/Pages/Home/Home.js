import React from 'react';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import AddPost from './AddPost/AddPost';
import AllPost from './AllPost/AllPost';
import CreatePost from './CreatePost/CreatePost';

const Home = () => {
    return (
        <div>
            
            
            <AddPost></AddPost>
            <AllPost></AllPost>
        </div>
    );
};

export default Home;