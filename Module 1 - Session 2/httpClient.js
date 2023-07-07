// Promise Fetch API
fetch("https://jsonplaceholder.typicode.com/todo")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));

// Async Await
// async function fetchAPI() {
//     try{
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos/1"
//         );
//         const data = await response.json();
//         console.log(data);
//     }catch(err){
//         console.log(err.message)
//     }
// }
// fetchAPI();