//Property name should not be changed
// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
export class AuthUserRequest{
    email: string
    password: string
    returnSecureToken: boolean
}