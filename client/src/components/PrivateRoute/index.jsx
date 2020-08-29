import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function({ component: Component, isLoggedIn, ...rest }) {
   
    return (
        <Route
            {...rest}
            render={
                props =>
                isLoggedIn? ( 
                    <Component {...props}/> // great render anything behind Auth
                ) : (
                    <Redirect to="/signin"/> // not signed in, redirect back to signin
                )
            }
        />
    )
}