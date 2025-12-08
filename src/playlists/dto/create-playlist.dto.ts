import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePlayListDTO {
    // @IsString()
    // @IsNotEmpty()
    readonly name: string;

    // @IsNotEmpty()
    // @IsArray()
    @IsNumber({}, { each: true })
    readonly songs: string[];

    // @IsNumber()
    // @IsNotEmpty()
    @IsOptional()
    readonly user: number;
}