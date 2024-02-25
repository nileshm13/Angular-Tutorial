//Property name should not be changed
// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
export class RegisterUserRequest{
    email: string
    password: string
    returnSecureToken: boolean
}