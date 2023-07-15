import express from "express";

import { getDetailUser } from "../controllers/rest/users.js";

// Import the router
const router = express.Router();

// The path definition, it will call the controllers/handlers
router.get("/:id", getDetailUser); // Params is to get details of data

// Export the users router definition path and handler
export default router;
