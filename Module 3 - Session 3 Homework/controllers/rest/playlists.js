import { getPlaylistByUsecase, getPlaylistUsecase, addSongUsecase } from "../../usecases/playlists/playlists.js";

export const getDetailPlaylist = (req,res) => {
    const { id } = req.params;
    const playlist = getPlaylistByUsecase(id);
    
    if (!playlist) {
        return res.status(404).json({
            message: "Playlist not found!",
        });
    }

    res.json({
        ...playlist,
    })
}

export const getPlaylist = (req,res) => {
    const playlist = getPlaylistUsecase();

    let newPlaylist = [];
    playlist.forEach((p,i=0) => {
        newPlaylist[i] = p;
        i++;
    })

    res.json(newPlaylist);
}

export const addSongToPlaylist = (req,res) => {
    try {
        const { id, song_id } = req.body;

        const song = addSongUsecase(id, song_id);
        console.log(song);

        if(!song){
            return res.status(404).json({
                message: "Playlist not found!"
            });
        }

        res.json({
            data: song,
        })
    } catch (error){
        res.status(500).json({
            message: error.message,
        })
    }
}