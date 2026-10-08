import express from "express";
import { createEnquiry } from "../controllers/enquiryController.js";

const router = express.Router();

// Public route used by the website contact form.
router.post("/", createEnquiry);

export default router;
