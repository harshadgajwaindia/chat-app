import express from "express";
import protectRoute from "../mddleware/auth.middleware.js"
import {getUsersForSidebar, getMessages, sendMessage} from "../controllers/message.controller.js"


const router = express.Router();
router.get("/users", protectRoute, getUsersForSidebar)
router.get("/:id", protectRoute, getMessages)
router.post("/send", protectRoute, sendMessage)


export default router;