import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateBookDto{

    @IsString()
    @MinLength(3, {message: 'El título del libro debe tener al menos 5 caracteres'})
    @IsNotEmpty({message: 'El nombre es obligatorio'})
    title: string;

    @IsNumber()
    @IsPositive()
    publicationYear: number; 

    @IsOptional()
    @IsBoolean()
    isAvailable?: boolean;

    @IsNumber() 
    @IsPositive({ message: 'El ID del autor debe ser un número positivo.' }) 
    authorId: number; 
}