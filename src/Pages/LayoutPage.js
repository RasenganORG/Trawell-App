import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
    return (
        <div>
            Layout Page
            <Outlet />
        </div>
    );
};

export default LayoutPage;