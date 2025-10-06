import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class UpdateBookDto{

    @IsOptional()
    @IsString()
    @MinLength(3, {message: 'El título del libro debe tener al menos 5 caracteres'})
    title?: string;
    
    @IsOptional()
    @IsBoolean()
    isAvailable?: boolean;
    
    @IsNumber() 
    @IsPositive({ message: 'El ID del autor debe ser un número positivo.' }) 
    authorId?: number; 
}