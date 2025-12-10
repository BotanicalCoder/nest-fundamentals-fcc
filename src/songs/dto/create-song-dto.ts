import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Artist } from 'src/artists/artist.entity';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, {each:true})
  readonly artists: Artist[];

  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date;

  @IsString()
  @IsOptional()
  readonly lyrics: string;

  // readonly genre?: string;
  // readonly album?: string;
  // readonly credits?: string[];
}
