const pool = require('./../config/mysql.config');
const mysql = require('mysql');

class CategoryService {

    constructor() {
        
    }

    async productFilterByCategory ( categoryName, callback ) {
        
        let query = 'Select product.name As name, category.name As category, product.url_image, product.price, product.discount From product Inner Join category On product.category = category.id Where category.name = ? Order By name ASC';

        pool.getConnection((err, connection) => {
            if(err) throw err;

            connection.query(query, [categoryName], (err, results) => {
                if(err) throw err;

                callback(results);
                
                connection.release();
                // console.log(results);
            });
        });
    }

    

}

module.exports = CategoryService;