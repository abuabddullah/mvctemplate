const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())


// Not found route
app.all("*", (req, res) => {
    res.send("NO route found.");
});
module.exports = app;