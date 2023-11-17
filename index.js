const express = require("express")
const mongoose = require("mongoose")
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express()
const PORT = 8001

// Routers
const urlRouter = require("./routers/url")
const staticRouter = require("./routers/staticRoutes")
const userRouter = require("./routers/user")

const {checkAuth} = require("./middlewares/auth")

//MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/shorturl', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => { console.log("MongoDB Connected !!"); })
  .catch(console.error)

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

// Routes
app.use("/url", checkAuth ,urlRouter);
app.use("/",checkAuth, staticRouter);
app.use("/user", userRouter)

app.listen(PORT, () => {
  console.log("Server Connected !!")
})