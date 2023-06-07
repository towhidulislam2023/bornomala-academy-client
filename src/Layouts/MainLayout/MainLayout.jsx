import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Sheared/Header/Header';
import Footer from '../../Sheared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='md:w-[80%] mx-auto px-6 md:px-0'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;