const express = require('express');
const cors = require("cors");

const routerApi = require('./routes');

const app = express();

// middleware json, urlencoded
app.use(express.json(), express.urlencoded({ extended: true }) );


routerApi(app);

//cors middleware
app.use (
    cors( {
        //url frontend
        origin: "http://localhost:3000",
        // credentials
        // credentials: true
    })
)

const port = 8000;

app.listen(port, () => {
    console.log('Server is running at port ' + port);
});