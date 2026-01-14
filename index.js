

// import http from 'http';
// import fs from 'fs';


// const PORT = 3000;

// const server = http.createServer((req, res) => {

//     const log = `${Date.now()} : ${req.url} new request \n`
//     fs.appendFile('data.txt', log, (err, data) => {
//         // res.end('Request logged');
//         switch(req.url){
//             case "/" : res.end("Home Page"); break;
//             case "/about" : res.end("About Page"); break;
//             case "/contact" : res.end("Contact Page"); break;
//             default : 
//                 res.writeHead(404, {'Content-Type': 'text/plain'});
//                 res.end("404 Page Not Found");

            
//         }
//     })

// // res.writeHead(404, {'Content-Type': 'text/plain'});


// }
// );


// //  http status code

// // 200 : OK
// // 404 : Frontend , Not found
// // 500 : Server error
// // 201 : Created
// server.listen(PORT, () =>{
// console.log(`Server is running on http://localhost:${PORT}`)
// })



// const objectdata = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
// }


// 

// console.log("a")
// setTimeout(() => {
//     console.log("b")
// }, 2000);
// console.log("c")
// console.log( "d")





let data = "react"
let data2 = "";

// setTimeout(() => {
//     data2 = "js"
// }, 2000)



// let finaldata = new Promise((resolve) => {
//     setTimeout(() => {
        
//         resolve(data + " " + "js");
//     }, 2000)
// })

// async function getData(arg){
//     let data2 = await finaldata;
//     console.log(data2 + " " + arg);
// }


// getData("hello")




// function addtion (a, b) {
//     return  new Promise((res, rej) => {
//         if(a === undefined || b === undefined){
//             rej("Invalid input")
//         }
//         setTimeout(() => {
//             res(`Addition is : ${a + b}`)
//         }, 3000)
//     })
// }

// addtion(10,44).then( data => console.log(data)).catch(err => console.log(err))




