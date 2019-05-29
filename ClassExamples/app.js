// var greet = require('./class')
// let radius = 2;
// var sabrina = new greet('Sabrina', 'Richard');
// var alphie = new greet('Alfie', 'Santos');

// sabrina.printMethod();


// let http = require('http');
// let dt = new Date();

// let server = http.createServer((request, response)=>{ //CREATE SERVER***
//     response.writeHead(200, {'Content-Type':'text/html'}); //200 mean successful
//     response.write("The data and time are current: " + dt.toDateString());

//     response.end();


// })

// server.listen(5000);

// console.log('web server is now running on port 5000');

// let fs = require('fs');
// let fileName = "myFile.txt"


// fs.writeFile(fileName, "I'm having a great day", (error)=>{ //WRITE FILE***
//     if(error){
//         console.log(error.message)
//     }

//     console.log(`file: ${fileName}`)
// })

// fs.readFile('dec.txt', (error, buffer)=>{  //READ FILE***
//     if(error){
//         console.log(error.message);
//         return;
//     }
//     console.log(buffer.toString());
// })

let superHero = require('superheroes');
console.log(superHero.random());


