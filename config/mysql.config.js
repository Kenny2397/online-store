const mysql = require('mysql');

const pool = mysql.createPool({
    host:'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test', 
    password: 'bsale_test',
    database: 'bsale_test',
    
});

// pool.connect((err) => {
//     if(err) throw err;
//     console.log("Server connected to database");
// });

exports.default = pool;
