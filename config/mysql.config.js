const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER, 
    password: process.env.DBPSS,
    database: process.env.DBDATABASE,
    
});

// pool.connect((err) => {
//     if(err) throw err;
//     console.log("Server connected to database");
// });

module.exports = pool;
