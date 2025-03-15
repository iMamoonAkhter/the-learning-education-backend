import { ApiResponse } from "./ApiResponse.js";
import { asyncHandler } from "./asynchandler.js";
import nodemailer from "nodemailer";


//Nodemailer

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.AUTHENTICATION_EMAIL,
        pass: process.env.AUTHENTICATION_PASSWORD,
      },
    });
    const mailOption = {
      from: `<${options.email}>`,
      to: process.env.AUTHENTICATION_EMAIL,
      subject: options.subject,
      html: options.html,
    };
    await transporter.sendMail(mailOption);
  };
  
  const contactFormSubmissionEmailMessage = (name, email,phone, message, service) => {
    return `<div>
          <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; padding: 20px;">
          <h2 style="text-align: center; color: #17aae0">Contact Form Query</h2>
          <table>
              <tr style="vertical-align: top;">
                <td><h4 style="color: #17aae0"> Name: </h4></td>
                <td><p> ${name} </p></td>
              </tr>
               <tr style="vertical-align: top;">
                <td><h4 style="color: #17aae0"> Phone: </h4></td>
                <td><p> ${phone} </p></td>
              </tr>
              <tr style="vertical-align: top;">
                <td><h4 style="color: #17aae0"> Phone: </h4></td>
                <td><p> ${service} </p></td>
              </tr>
              <tr style="vertical-align: top;">
                <td><h4 style="color: #17aae0"> Email: </h4></td>
                <td><p> ${email} </p></td>
              </tr>
              <tr style="vertical-align: top;">
                <td><h4 style="color: #17aae0"> Query: </h4></td>
                <td style="overflow-wrap: break-word; max-width: 530px;"><p> ${message} </p></td>
              </tr>
            </table>
        </div>
      </div>
    </div>`;
  };
  
 export  const contactFormSubmission = asyncHandler(async (req, res, next) => {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phone;
      const message = req.body.message;
      const service = req.body.service;
  
      await sendEmail({
        from: email,
        email: process.env.AUTHENTICATION_EMAIL,
        subject: "Contact Form Query",
        html: contactFormSubmissionEmailMessage(name, email,phone, message, service),
      });
      res.status(200).json(new ApiResponse(200, "Message sent successfully!"));
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  });
