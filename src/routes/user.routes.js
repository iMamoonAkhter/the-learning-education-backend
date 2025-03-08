import { Router } from "express";

import { contactFormSubmission } from "../utils/service.js";
const router = Router();

router.route("/nodemailer").post(contactFormSubmission)

export default router;
