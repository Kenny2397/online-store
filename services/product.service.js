const pool = require('./../config/mysql.config');
const mysql = require('mysql');

class ProductService {

    constructor() {
        
    }

    async getAll(callback) {
        let query = 'SELECT * FROM product ORDER BY name ASC';

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

    async search(search, callback) {
        let query = 'SELECT * FROM product WHERE name LIKE ? ORDER BY name ASC';

        pool.getConnection((err, connection) => {
            if(err) throw err;

            connection.query(query, ['%' + search + '%'], (err, results) => {
                if(err) throw err;

                callback(results);
                
                connection.release();
                // console.log(results);
            });
        });
    }

   

}

module.exports = ProductService;