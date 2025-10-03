import { IsString, MinLength } from "class-validator";

export class UpdateAuthorNameDto{
    @IsString()
    @MinLength(3, {message: 'El nombre del autor debe tener al menos 3 caracteres'})
    name: string;
}