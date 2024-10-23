import { Router } from "express";
import { addProfileImage, getUserInfo, login, signup, updateProfile,removeProfileImage} from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import multer from "multer";
import { logout } from "../controllers/AuthController.js";

const upload= multer({dest : "uploads/profiles/"});

const authRoutes=Router();

authRoutes.post("/signup",signup);
authRoutes.post("/login",login);
authRoutes.get("/user-info",verifyToken,getUserInfo);
authRoutes.post("/update-profile",verifyToken,updateProfile);
authRoutes.post("/add-profile-image",verifyToken,upload.single("profile-image"),addProfileImage);
authRoutes.delete("/remove-profile-image",verifyToken,removeProfileImage);
authRoutes.post("/logout",logout);
export default authRoutes;