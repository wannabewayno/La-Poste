import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLoggedIn from '../../redux/reducers/isLoggedIn';
import { useSelector } from 'react-redux'

export default function({ component: Component, ...rest }) {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
        <Route
            {...rest}
            render={
                props =>
                isLoggedIn? ( 
                <Component {...props}/> // great render anything behind Auth
                ) : (
                    <Redirect to="/"/> // not signed in, redirect back to signin
                )
            }
        />
    )
}