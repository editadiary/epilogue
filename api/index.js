const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config(); 
app.use(express.json()); // can send any json file

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connexted to MongoDB"))
    .catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    }, 
    filename: (req, file, callback) => {
        callback(null, req.body.name)
    }
});

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
})

// app.use("/hello", (req, res)=>{
//     console.log("hey this is hello url") //localhost:5000/hello 접속시 log 출력
// })

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", ()=>{
    console.log("Backend is running");
});


// npm i express mongoose dotenv multer // dotenv:curr env, multer:img
// npm init
// npm start
// npm i nodemon // for restarting due to changed