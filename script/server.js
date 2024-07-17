const express = require("express")
const app = express()
const port = 3000

app.get('https://expressjs.com/en/starter/basic-routing.html', (req, res) => {
    console.log("Handled get request");
})

app.listen(port, () => {
    console.log("Port is listening ")
})
