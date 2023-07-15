import express from "express";

import { getDetailPlaylist } from "../controllers/rest/playlists.js";

// Import the router
const router = express.Router();

// The path definition, it will call the controllers/handlers
// router.post("/", addUser);
router.get("/:id", getDetailPlaylist); // Params is to get details of data

// Export the users router definition path and handler
export default router;
