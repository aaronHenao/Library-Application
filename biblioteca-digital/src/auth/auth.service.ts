import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}

    async login(user: any){
        if (user.email !== 'test@test.com' || user.password !== 'password'){
            throw new UnauthorizedException('Credenciales inválidas');
        }
        const payload = {username: 'testuser', sub: 1};

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
