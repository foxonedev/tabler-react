import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../services/authentication-service';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {

        const currentUser = authenticationService.currentUserValue;

        //console.log('private route current user', currentUser)

        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        return <Component {...rest} {...props} />
    }} />
)

export default PrivateRoute;
