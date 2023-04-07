import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header.jsx/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;