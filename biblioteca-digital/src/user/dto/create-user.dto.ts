import { IsBoolean, IsEmail, IsNotEmpty, IsString,  MinLength } from "class-validator";

export class CreateUserDto{

    @IsString({message: 'El nombre no pueden ser números'})
    @MinLength(3, {message: 'El nombre debe tener al menos 3 caracteres'})
    @IsNotEmpty({message: 'El nombre es obligatorio'})
    name: string;

    @IsEmail({}, {message: 'El correo debe ser una dirección válida.'})
    @IsNotEmpty({message: 'El correo es obligatorio'})
    email: string;


    @MinLength(8, {message: 'La contraseña debe tener al menos 8 caracteres'})
    @IsNotEmpty({message: 'La contraseña es obligatoria'})
    password: string;
    
}