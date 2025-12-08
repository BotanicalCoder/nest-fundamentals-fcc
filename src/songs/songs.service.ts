import { Inject, Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';
import type { Connection } from 'src/common/constants/connection';

@Injectable()
export class SongsService {
  // constructor(@Inject('CONNECTION') private connection: Connection) {
  //   console.log(this.connection.DB_NAME);
  // }

  // local db ( an array )

  private readonly songs: { id: string }[] = [];

  // create a new song
  create(song: CreateSongDto) {
    this.songs.push({ ...song, id: new Date().getTime().toString() });
    return this.songs;
  }

  // find all songs
  findAll() {
    return this.songs;
    // throw new Error('Unable to find all songs');
  }

  // find a song by id
  findOne(id: string) {
    return this.songs.find((song) => song.id === id);
  }

  // update a song by id
  update(id: string, song: { id: string; title: string }) {
    const songIndex = this.songs.findIndex((song) => song.id === id);
    this.songs[songIndex] = song;
  }

  // delete a song by id
  delete(id: string) {
    const songIndex = this.songs.findIndex((song) => song.id === id);
    this.songs.splice(songIndex, 1);
  }
}
