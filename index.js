const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const cors = require("cors");


dotenv.config();


const app = express();


// middleware

app.use(express.json());

app.use(cors());


// routes

const userRoutes = require("./routes/userRoutes");


app.use("/api/users", userRoutes);



// mongodb connection

mongoose.connect(process.env.MONGO_URL)

.then(() => {

    console.log("MongoDB Connected");

})

.catch((error) => {

    console.log(error);

});




// server

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});