//Property name should not be changed
// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
export class RegisterUserResponse {
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
    registered?: boolean
}