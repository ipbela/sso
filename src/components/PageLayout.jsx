import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="primary" variant="dark" className="navbarStyle">
                <a className="navbar-brand" href="/">
                    Microsoft Identity Platform
                </a>
                <div className="collapse navbar-collapse justify-content-end">
                    {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                </div>
            </Navbar>
            <h5>
                <center>Welcome to the Microsoft Authentication Library For Javascript - React Quickstart</center>
            </h5>
            <br />
            <br />
            {props.children}
        </>
    );
};
