import songs from "./json/songs.json" assert {type: "json"};

export const getSongsByIDRepo = (id) => {
    const song = songs.find((song) => song.id === Number(id));
    return song;
}

export const getSongsRepo = () => {
    return songs;
}