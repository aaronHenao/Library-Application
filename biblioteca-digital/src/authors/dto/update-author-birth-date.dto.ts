import { Type } from "class-transformer";
import { IsDate } from "class-validator";

export class UpdateAuthorBirthDateDto{
    @Type(() => Date)
    @IsDate()
    birthDate: string;
}