export function createUser(userData) {
  return new Promise((resolve) =>{
    const response =  fetch('http://localhost:8080/users', {method:'POST', body: JSON.stringify(userData), headers:{'content-type': 'application/json'}});
    const data =  response.json();
    resolve({data})
  }
  );
}
