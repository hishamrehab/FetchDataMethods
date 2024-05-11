/// first way  fetch data using fetchKeyWord

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data) => data.map((user) => console.log(user.name , user.address)))
.catch((error) => console.error("Error 404"))



// Second Way

async function get() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
   data.map((user) => console.log(user.name , user.address));
}

get().then((response) => console.log("Api Fetched")).catch((error) => console.error("eRROR 404"));



// Axios Library

axios.get("https://jsonplaceholder.typicode.com/users")
.then((response) => response.data.map((user) => console.log(user.name , user.address ))).catch((error) => console.log("Error 40"))