import { Type } from "class-transformer";
import { IsDate, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateAuthorDto{
    @IsOptional()
    @IsString()
    @MinLength(3, {message: 'El nombre del autor debe tener al menos 3 caracteres'})
    name: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    birthDate?: string;
}