import { getPlaylistByIDRepo } from "../../repositories/playlist/playlist.js";
import { getSongsByIDRepo } from "../../repositories/songs/songs.js";

export const getPlaylistByUsecase = (id) => {
    const playlist = getPlaylistByIDRepo(id);
    if(!playlist){
        return null;
    }
    // console.log(playlist);
    var songs = [];
    playlist.song_list.forEach((song, i=0) => 
    {
       songs[i] = getSongsByIDRepo(song);
       i++;
    });
    
    // console.log(songs);
    // const songs = getSongsByIDRepo(playlist.song_list);
    if(!songs){
        return null;
    }
    // console.log(songs);

    const newPlaylist = {
        ...playlist,
        song_list: songs,
    }

    return {...newPlaylist};
}