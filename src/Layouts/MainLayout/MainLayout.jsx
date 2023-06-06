import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Sheared/Header/Header';
import Footer from '../../Sheared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;