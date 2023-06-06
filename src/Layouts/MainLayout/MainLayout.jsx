import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h1 className="text-4xl text-center">Main Layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;