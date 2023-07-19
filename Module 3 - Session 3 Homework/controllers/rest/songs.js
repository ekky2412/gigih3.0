import { getSongsByIDUsecase, getSongsUseCase } from "../../usecases/songs/songs.js";

// Controller that handler to get the detail of user
export const getDetailSong = (req, res) => {
  const { id } = req.params;

  // Find user with id params, and it will call the usecase function to get the business logic
  const songs = getSongsByIDUsecase(id);

  // If not found
  if (!songs) {
    return res.status(404).json({
      message: "Song not found!",
    });
  }

  res.json({
    data: songs,
  });
};

export const getListSong = (req, res) => {
  const songs = getSongsUseCase();
  res.json(songs);
}
