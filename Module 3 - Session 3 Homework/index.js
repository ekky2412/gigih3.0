import express from "express";

import songsRouter from "./routes/songs.js";
import playlistsRouter from "./routes/playlists.js";

// Make express server
const app = express();

// express now can read req.body (json)
app.use(express.json());
// app.use(express.urlencoded());

// It will call the router, to define the path of "/users" path
app.use("/playlist", playlistsRouter);
app.use("/songs", songsRouter);

// Start the server
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
