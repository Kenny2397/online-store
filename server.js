const express = require('express');

const routerApi = require('./routes');

const app = express();

// middleware json
app.use(express.json());

routerApi(app);


const port = 8000;

app.listen(port, () => {
    console.log('Server is running at port ' + port);
});