import { IsBoolean } from "class-validator";

export class UpdateAvailableDto {
    @IsBoolean()
    isAvailable?: boolean;
}