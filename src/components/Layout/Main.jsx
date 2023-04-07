import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from '../Header.jsx/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default Main;