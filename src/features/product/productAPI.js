export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({data})
  }
  );
}


export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products/'+id);
    const data = await response.json();
    resolve({data})
  }
  );
}

export function fetchProductsByFilters(filter, sort, pagination) {
  //filter = {"category":["smartphones", "laptops"]}
  //sort = {_sort:"price", _order="desc"}
  //pagination = {_page:1, _limit = 10} 
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products?' +queryString);
    const data = await response.json();
    const totalItems = await response.headers.get('X-Total-Count') //provided by json server

    resolve({data:{products:data, totalItems:+totalItems}})
  }
  );
}

export async function fetchBrands() {
  return new Promise(async(resolve) => {
    const response = await fetch('http://localhost:8080/brands');
    const data = response.json();
    resolve({data});
  })
}

export async function fetchCategories() {
  return new Promise(async(resolve) => {
    const response = await fetch('http://localhost:8080/categories');
    const data = response.json();
    resolve({data});
  })
}
