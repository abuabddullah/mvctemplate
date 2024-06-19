const express = require("express");
const cors = require('cors')



const app = express();



app.use(cors())
app.use(express.json())



//Route imports
const testRouter = require("./routes/v1/testRoutes");



//invoking routes
app.use('/api/v1', testRouter);


// Not found route
app.all("*", (req, res) => {
    res.send("NO route found.");
});





module.exports = app;