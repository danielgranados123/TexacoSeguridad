import express from "express";
import fireAlertController from "../controllers/emailController.js";

const router = express.Router();

router.post("/sendAlert", fireAlertController.sendAlert);

export default router;