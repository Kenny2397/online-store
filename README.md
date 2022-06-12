# BSALE TEST CHALLENGE

app:

https://bsale-test-challenge.netlify.app/


view:

![alt text](./client/img/bsale-test-port.png)

api:

https://bsale-challenge-online-store.herokuapp.com


# ENDPOINTS

### ALL PRODUCTS

GET LISTA DE PRODUCTOS

GET api/v1/products  RETURN ALL PRODUCTS IN JSON FORMAT ORDER BY NAME ASC

![ALL PRODUCTS](./client/img/GET-ALL-PRODUCTS.png)

### PRODUCTS BY CATEGORY

GET LISTA DE PRODUCTOS POR CATEGORÍA

GET api/v1/categories/:category  RETURN ALL PRODUCTS IN SPECIFIC CATEGORY JSON FORMAT ORDER BY NAME ASC


![ALL PRODUCTS](./client/img/PRODUCT-FILTER-BY-CATEGORY.png)

### SEARCH PRODUCTS

GET LISTA DE PRODUCTOS QUE COINCIDAN CON LA BUSQUEDA

GET api/v1/products/search/:search  RETURN ALL PRODUCTS SEARCH MATCH  IN JSON FORMAT ORDER BY NAME ASC 

![ALL PRODUCTS](./client/img/SEARCH-PRODUCTS.png)