import { Router } from "express";
import {addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";

const router = Router(); 
router.get("/", (req, res) => {
  res.json({ message: "Users API working" });
});


router.route("/login").post(login)
router.route("/register").post(register)
router.route("/add_to_activity").post(addToHistory)
router.route("/get_all_activity").get(getUserHistory)

export default router;

