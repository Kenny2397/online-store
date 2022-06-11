const express = require('express');
const cors = require("cors");

const routerApi = require('./routes');

const app = express();

//cors middleware
const whiteList = ['http://127.0.0.1:5500'];
app.use(
    cors({
        origin: function(origin, callback) {
            if (whiteList.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ["GET"]
}));

// middleware urlencoded para solicitudes simples de forms por default
// app(express.urlencoded({ extended: true }));

// middleware json
app.use(express.json());


routerApi(app);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server is running at port ' + port);
});