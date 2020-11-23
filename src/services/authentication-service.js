import { BehaviorSubject } from 'rxjs';
import { handleResponse } from './handle-response';
import {authHeader} from './auth-header'
import {base_url} from '../containers/utils/env'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));


export const authenticationService = {
    login,
    logout,
    verify,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};
function login(username, password,secret) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password,secret })
    };
    return fetch(`${base_url}/api/v01/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log("login user", user)
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });

}


function verify(loginusr){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`${base_url}/api/v01/verify/${loginusr}`, requestOptions)
        .then(handleResponse);
}


function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
    window.location.reload()
}
