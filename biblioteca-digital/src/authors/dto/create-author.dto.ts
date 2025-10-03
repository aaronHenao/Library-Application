import { IsOptional, IsString, MinLength, IsDate} from "class-validator";
import { Type } from "class-transformer";

export class CreateAuthorDto{
    @IsString()
    @MinLength(3, {message: 'El nombre del autor debe tener al menos 3 caracteres'})
    name: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    birthDate?: string;
}