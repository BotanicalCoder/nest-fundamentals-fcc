import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';

// const mockSongService = () => {
//   return {
//     findAll: () => {
//       return [
//         {
//           id: '1',
//           title: 'song1',
//           artist: ['artist1'],
//           releaseDate: new Date(),
//           duration: new Date(),
//         },
//         {
//           id: '2',
//           title: 'song2',
//           artist: ['artist2'],
//           releaseDate: new Date(),
//           duration: new Date(),
//         },
//       ];
//     },
//     findOne: (id: string) => {
//       return {
//         id: '1',
//         title: 'song1',
//         artist: ['artist1'],
//         releaseDate: new Date(),
//         duration: new Date(),
//       };
//     },
//     create: (song: string) => {
//       return {
//         id: '1',
//         title: song,
//         artist: ['artist1'],
//         releaseDate: new Date(),
//         duration: new Date(),
//       };
//     },
//     update: (id: string, song: string) => {
//       return {
//         id,
//         title: song,
//         artist: ['artist1'],
//         releaseDate: new Date(),
//         duration: new Date(),
//       };
//     },
//     delete: (id: string) => {
//       return {
//         id,
//         title: 'song1',
//         artist: ['artist1'],
//         releaseDate: new Date(),
//         duration: new Date(),
//       };
//     },
//   };
// };

@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    // {
    //   provide: SongsService,
    //   useValue: mockSongService(),
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
