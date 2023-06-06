import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Sheared/Header/Header';

const MainLayout = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;