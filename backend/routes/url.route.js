
import express from "express";
import { handleGetAll, handlePost } from "../controller/url.controller.js";

const router = express.Router();

router.post('/',handlePost);
router.get('/', handleGetAll );

export default router;
