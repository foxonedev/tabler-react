import { authenticationService } from './authentication-service';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    
    if (currentUser && currentUser.tokenSalt) {
        return { Authorization: `Bearer ${currentUser.tokenSalt}`};
    } else {
        return {};
    }
}
