import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { In, Repository } from 'typeorm';
import { Song } from 'src/songs/song.entity';
import { User } from 'src/users/user.entity';
import { CreatePlayListDTO } from './dto/create-playlist.dto';

@Injectable()
export class PlaylistsService {
    constructor(
        @InjectRepository(Playlist)
        private playListRepo: Repository<Playlist>,

        @InjectRepository(Song)
        private songRepo: Repository<Song>,

        @InjectRepository(User)
        private userRepo: Repository<User>
    ){
        
    }

    async create (playListDTO: CreatePlayListDTO): Promise <Playlist>{        
        const playlist = new Playlist();

        playlist.name = playListDTO.name;

        // songs would be an array of the song ids form the DTO object
        const songs = await this.songRepo.findBy({id:In(playListDTO.songs)})

        // set the relation for the songs with the playliast entity
        playlist.songs= songs;

        // the user would be the id of the user from the request
        const user  = await this.userRepo.findOneBy({
            id: playListDTO.user
        })

        playlist.user= user!;


        return this.playListRepo.save(playlist)
    }
}
