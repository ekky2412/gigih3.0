import { getPlaylistByUsecase } from "../../usecases/playlists/playlists.js";

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