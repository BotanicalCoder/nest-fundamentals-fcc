import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';
import { Song } from './song.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { UpdateSongDTO } from './dto/update-song-dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page=1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit=10
  ): Promise<Pagination<Song>> {
    try {
      limit = limit >100?100:limit;

      return this.songsService.paginate({
        page,
        limit
      });
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    id: number,
  ) {
   return this.songsService.findOne(id)
  }

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number,
@Body() updateSongDTO:UpdateSongDTO
):Promise<UpdateResult> {
    return this.songsService.update(id, updateSongDTO)
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number):Promise<DeleteResult> {
    return this.songsService.remove(id);
  }
}
