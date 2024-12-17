const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Allow all origins
//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

app.get("/", (req, res) => {
    res.send("API is live 🎉");
});
//middlewares
app.use(cors({
    origin: "https://timetocare.onrender.com", // Replace with your frontend's URL
    methods: ["GET", "POST"],
    credentials: true,
}));
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
    console.log(
        `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
        .bgCyan.white
    );
});
const API_URL = "https://timetocare.onrender.com/api/v1/user/getUserData";
fetch(API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: "12345" }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
