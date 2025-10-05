import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { UserResponseDto } from 'src/user/dto/user-response.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>, 
        private readonly jwtService: JwtService){
    }

    async validateUser(credentials: LoginDto): Promise<User | null>{

        const user = await this.userRepository.findOneBy({email: credentials.email})

        if(!user){
            return null;
        }
        const correctPassword = (user.password === credentials.password)

        if(correctPassword){
            return user
        }
        return null;
    }

    async login(user: User): Promise<LoginResponseDto>{
        if(!user){
            throw new UnauthorizedException("Credenciales inválidas");
        }

        const payload = { 
            sub: user.id, 
            email: user.email,
            name: user.name
        };
        const access_token = this.jwtService.sign(payload);
        const userResponse = new UserResponseDto(user); 
        return new LoginResponseDto(access_token, userResponse)

    }
}
