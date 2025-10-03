import { IsString, MinLength } from "class-validator";

export class UpdateBookTitleDto {
    @IsString()
    @MinLength(3, {message: 'El título del libro debe tener al menos 5 caracteres'})
    title: string;
}