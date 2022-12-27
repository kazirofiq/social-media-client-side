import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import NavBar from '../Share/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;