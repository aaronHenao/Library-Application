import { Body, Controller, Post, UnauthorizedException} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LibraryApplicationBaseResponse } from 'src/common/dto/base-response.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<LibraryApplicationBaseResponse<LoginResponseDto>>{
        const user = await this.authService.validateUser(loginDto);

        if(!user){
            throw new UnauthorizedException("Correo o contraseña incorrectos")
        }

        const LoginResponse = await this.authService.login(user)
        return {
            statusCode: 200, 
            message: 'Inicio de sesión exitoso',
            data: LoginResponse
        }
    }

}
