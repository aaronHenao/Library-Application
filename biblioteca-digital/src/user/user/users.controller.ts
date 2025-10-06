import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LibraryApplicationBaseResponse } from 'src/common/dto/base-response.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

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

    @Get(':id')
    async getUserById(@Param('id') id:string): Promise<LibraryApplicationBaseResponse<UserResponseDto>>{
        const user = await this.userService.getUserById(+id);
        return {
            statusCode: 200,
            message: 'Usuario obtenido correctamente',
            data: user
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

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() updatedUser: UpdateUserDto): Promise<LibraryApplicationBaseResponse<UserResponseDto>>{
        const user = await this.userService.updateUser(+id, updatedUser);
        return{
            statusCode: 202, 
            message: 'usuario actualizado correctamente',
            data: user
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:string){
        const user = await this.userService.deleteUser(+id)
        return{
            statusCode: 202, 
            message:'Usuario eliminado correctamente',
            data: user
        }
    }
}
