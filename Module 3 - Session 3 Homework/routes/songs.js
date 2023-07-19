import express from "express";

import { getDetailSong, getListSong } from "../controllers/rest/songs.js";

// Import the router
const router = express.Router();

// The path definition, it will call the controllers/handlers
// router.post("/", addUser);
router.get("/:id", getDetailSong); // Params is to get details of data
router.get("/", getListSong);
// Export the users router definition path and handler
export default router;
