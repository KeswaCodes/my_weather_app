const express = require("express");
const app = express();
const cors = require('cors');

const PORT = 3000

app.use(cors()); 

app.get("/", (req, res) => {
    return res.json({"message": "SUCCESS"});
})

app.post("/", (req, res) => {
    res.send("posting")
})

app.listen(PORT, () => {
    console.log("Listening to port " + PORT)
})

