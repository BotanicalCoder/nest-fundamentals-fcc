import {Song} from "src/songs/song.entity";
import {User} from "src/users/user.entity";
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity('playlists')
export class Playlist {
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name:string;

    /**
     * Each Playlist would have multiple songs
     */
    @OneToMany(()=>Song, (song)=>song.playList)
    songs:Song[];

    /**
     * Many playlist can belong to a single user
     */
    @ManyToOne(()=>User, (user)=>user.playLists)
    user:User
}