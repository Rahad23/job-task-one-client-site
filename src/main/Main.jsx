import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/footer/Footer';
import Navebar from '../component/navebar/Navebar';

const Main = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;