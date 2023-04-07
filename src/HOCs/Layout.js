import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../Actions/auth';
import { Outlet } from 'react-router-dom';

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
