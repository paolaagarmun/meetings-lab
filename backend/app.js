// imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const app = express();

// db connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connected..."))
    .catch(() => console.log("not connected"))

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use("/api/users", require("./routes/user"))
app.use("api/meetings", require("./routes/meeting"))

// listen to port
const port = process.env.PORT 
app.listen(port, () => {console.log("Server is running...")})