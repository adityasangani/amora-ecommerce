export async function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({data})
  }
  );
}

export async function fetchProductsByFilters(filter) {
  //filter = {"category":"smartphones"}
  let queryString = '';
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products?' + queryString);
    const data = await response.json();
    resolve({data})
  }
  );
}
