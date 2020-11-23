import { authenticationService } from './authentication-service';
//import {useLocation} from 'react-router-dom'

export function handleResponse(response) {
    //console.log('resp', response)
    return response.text().then(text => {
        //console.log("res handle data>>>", text)
        const data = text && JSON.parse(text);
        //console.log("res handle data parse>>>", data)
        //console.log("is ok ?",response.ok)
        if (!response.ok) {
           // console.log('------- DEVRAIT SARRETER  ---',response.status)
            if ([401,403,498].indexOf(response.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
                //window.location.reload()
                //useLocation().reload(true);
            }

            const error = (data && data.message) || response.statusText;
           // console.log("errors", error)
            return Promise.reject(error);
        }

        return data;
    });
}
