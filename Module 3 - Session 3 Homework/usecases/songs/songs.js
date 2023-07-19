import { getSongsByIDRepo, getSongsRepo } from "../../repositories/songs/songs.js";

export const getSongsByIDUsecase = (id) => {
    const song = getSongsByIDRepo(id)
    if(!song){
        return null;
    }

    song.times_played += 1;   
    // console.log(song);
    return {...song};
}

export const getSongsUseCase = () => {
    const song = getSongsRepo();
    return song;
}