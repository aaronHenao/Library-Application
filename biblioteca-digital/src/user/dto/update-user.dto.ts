import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto{

    @IsOptional()
    @IsString({message: 'El nombre no pueden ser números'})
    @MinLength(3, {message: 'El nombre debe tener al menos 3 caracteres'})
    name?: string;
    
    @IsOptional()
    @IsEmail({}, {message: 'El correo debe ser una dirección válida.'})
    email?: string;

    @IsOptional()
    @MinLength(8, {message: 'La contraseña debe tener al menos 8 caracteres'})
    password?: string;
}