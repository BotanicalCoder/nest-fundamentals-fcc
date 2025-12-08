import { Body, Controller, Logger, Post, Request } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreatePlayListDTO } from './dto/create-playlist.dto';
import { Playlist } from './playlist.entity';

@Controller('playlists')
export class PlaylistsController {
    constructor(private playlistService: PlaylistsService){}
    @Post()
    create(
        @Request() req,
        @Body() playlistDTO
    ): boolean{
        console.log(playlistDTO)
        return true

        // return this.playlistService.create(playlistDTO)
    }
}
