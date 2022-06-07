const pool = require('./../config/mysql.config');
const mysql = require('mysql');

class ProductService {

    constructor() {
        
    }

    getAll(callback) {
        let query = 'SELECT * FROM product';

        pool.getConnection((err, connection) => {
            if(err) throw err;

            connection.query(query, (err, results) => {
                if(err) throw err;

                callback(results);
                connection.release();
                // console.log(results);
            });
        });
    }

    

}

module.exports = ProductService;