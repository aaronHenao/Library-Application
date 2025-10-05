import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LibraryApplicationBaseResponse } from 'src/common/dto/base-response.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UsersService){}

    @Get()
    async getAll():Promise<LibraryApplicationBaseResponse<UserResponseDto[]>>{
        const users = await this.userService.getAll();
        return {
            statusCode: 200,
            message: 'Usuarios obtenidos correctamente',
            data: users
        };
    }

    @Post()
    async createUser(@Body() newUser: CreateUserDto): Promise<LibraryApplicationBaseResponse<UserResponseDto>>{
        const user = await this.userService.create(newUser);
        return{
            statusCode: 201, 
            message: 'Usuario creado correctamente',
            data: user
        }
    }
}
