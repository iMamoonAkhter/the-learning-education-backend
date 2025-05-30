import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))

app.use(cookieParser())

app.get('/set-cookie', (req, res) => {
    res.cookie('test_cookie', 'cookie_value', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.send('Cookie set!');
  });

//routes import
import userRouter from "../src/routes/user.routes.js"

//routes decalartion
app.use("/api/v1/users", userRouter)
app.get("/", (req, res) => {
    res.send("Hello from nodemailer")
})
app.get('/favicon.ico', (req, res) => res.status(204).end())
export default app;