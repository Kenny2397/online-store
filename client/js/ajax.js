console.log('ajax activo');
let categoryActive = false;

if(!categoryActive){
    getData();
}



function getData() {
    console.log('click');
    fetch('https://challenge-bsale.herokuapp.com/api/v1/products', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        let html = '';
        data.data.forEach(element => {
            if (element.url_image) {
                html += `
                <div class="col d-flex justify-content-center mb-4">
                <div class="card shadow mb-1 bg-secondary rounded" style="width: 15rem;">
                  <img src="${element.url_image}" class="card-img-top img img-fluid" alt="product_image" style="height: 240px;">
                  <div class="card-body" style="height: 160px;">
                    <p class="card-text text-white description">${element.name}</p>
                    <h5 class="text-warning">Precio: <span class="price">$ ${element.price/1000}</span></h5>
                    <div class="d-grid gap-2">
                    <button  class="btn btn-warning button">Agregar</button>
                  </div>
                  </div>
                </div>
              </div>
            `;
            }

        });
        document.querySelector('#lista').innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}


function getCategory(category) {
    const lista = document.getElementById('lista');
  
      if(lista.firstChild){
          document.getElementById("lista").removeChild(lista.firstChild);
      }
  
  
      fetch('https://challenge-bsale.herokuapp.com/api/v1/categories/'+category, {
          method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
          console.log(data.data);
          let html = '';
          data.data.forEach(element => {
            if (element.url_image) {
                html += `
                <div class="col d-flex justify-content-center mb-4">
                <div class="card shadow mb-1 bg-secondary rounded" style="width: 15rem;">
                  <img src="${element.url_image}" class="card-img-top img img-fluid" alt="product_image" style="height: 240px;">
                  <div class="card-body" style="height: 160px;">
                    <p class="card-text text-white description">${element.name}</p>
                    <h5 class="text-warning">Precio: <span class="price">$ ${element.price/1000}</span></h5>
                    <div class="d-grid gap-2">
                    <button  class="btn btn-warning button">Agregar</button>
                  </div>
                  </div>
                </div>
              </div>
            `;
            }
  
        });
          document.querySelector('#lista').innerHTML = html;
      })
      .catch(error => console.error('Error:', error));
  }

  
const formSearch = document.querySelector('#form-search').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const text = e.target.querySelector('#search').value;
  
    const search = {
      search: text
    }
    if(text.trim() === ''){
      console.log('text is empty');
      return;
    }else{
      searchProduct(search);
    }
  
  });
  
  function searchProduct(search) {
  
    const lista = document.getElementById('lista');
  
    if(lista.firstChild){
        document.getElementById("lista").removeChild(lista.firstChild);
    }
  
    fetch('https://challenge-bsale.herokuapp.com/api/v1/products/search/'+search.search, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        let html = '';
        data.data.forEach(element => {
          if (element.url_image) {
              html += `
              <div class="col d-flex justify-content-center mb-4">
                <div class="card shadow mb-1 bg-secondary rounded" style="width: 15rem;">
                  <img src="${element.url_image} " class="card-img-top img img-fluid" alt="product_image" style="height: 240px;">
                  <div class="card-body" style="height: 160px;">
                    <p class="card-text text-white description">${element.name}</p>
                    <h5 class="text-warning">Precio: <span class="price">$ ${element.price/1000}</span></h5>
                    <div class="d-grid gap-2">
                    <button  class="btn btn-warning button">Agregar</button>
                    </div>
                  </div>
                </div>
              </div>
            `;
  
          }
  
      });
            document.querySelector('#lista').innerHTML = html;
            // formSearch.reset();
  
        })
    .catch(error => console.error('Error:', error));
  
  } 