import { IsNumber, IsPositive } from "class-validator";

export class UpdateBookAuthorIdDto{
    @IsNumber() 
    @IsPositive({ message: 'El ID del autor debe ser un número positivo.' }) 
    authorId: number; 
}