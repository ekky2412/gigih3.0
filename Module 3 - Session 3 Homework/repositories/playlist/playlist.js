import playlists from "./json/playlist.json" assert {type: "json"};

export const getPlaylistByIDRepo = (id) => {
    const playlist = playlists.find((playlist) => playlist.id === Number(id));

    return playlist;
}

export const addSongRepo = (id, song_id) => {
    if (!id){
        throw Error("Playlist is not valid");
    }

    const index = playlists.findIndex((playlist) => playlist.id === Number(id));
    
    if (playlists[index].song_list.includes(song_id)){
        throw Error("Song Already Exist!");
    }
    playlists[index].song_list.push(song_id)
    console.log(playlists)

}