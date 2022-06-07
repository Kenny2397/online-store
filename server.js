const express = require('express');

const app = express();

// middleware json
app.use(express.json());




const port = 8000;

app.listen(port, () => {
    console.log('Server is running at port ' + port);
});