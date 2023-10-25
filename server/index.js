const express = require("express")
const cors = require ("cors")
const mongoose = require ("mongoose")

const app = express()
require("dotenv").config()

app.use(express.json()) // for parsing application/json (midleware functions)
app.use(cors())

const port = process.env.PORT || 5000;         //set automatic port for online server
const uri = process.env.ATLAS_URI;         //set automatic port for online server

app.listen(port, (req, res) => {                                  //callback function (request and response)
    console.log(`Server is running on port ${port}`);            //console log message to show server is up and listening
});

mongoose.connect(uri, {                  //connect to MongoDB database
    useNewURLParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connection established")).catch((error => console.log 
("MongoDB connection failed: ", error.message))) 