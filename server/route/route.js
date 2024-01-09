
import express  from "express";

import { addUser, allUser, getUser,editUser, deleteUser } from "../controller/userController.js";


const router = express.Router();

router.post("/adduser", addUser);
router.get("/alluser",allUser);
router.get("/:id",getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);



export default router;