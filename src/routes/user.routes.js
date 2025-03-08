import { Router } from "express";

import { contactFormSubmission } from "../utils/service.js";
const router = Router();

router.route("/nodemailer").post(contactFormSubmission)
router.route("/").get((req, res)=>{
    res.send("Hello from nodemailer")
})  
export default router;
