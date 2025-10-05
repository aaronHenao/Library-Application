export class LoginResponseDto{
    name: string;
    email: string;
    access_token: string;

    constructor(accessToken, user){
        this.name = user.name;
        this.email = user.email;
        this.access_token = accessToken
    }
}