const fs = require('fs');
const http = require('http');
const url = require('url');


// server 


const data =fs.readFileSync('./starter/dev-data/data.json','utf-8')
const dataObj = JSON.parse(data);

const server = http.createServer((req,res)=>{
    const pathName = req.url;

    //Overview Page
    if(pathName ==='/' || pathName ==='/overview'){
        res.end('This is OVERVIEW');
    
    // Product Page
    }else if(pathName ==='/product'){
        res.end('This is PRODUCT');
    
    //API
    }else if(pathName ==='/api'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data);

    //NOT FOUND
    }else{
        res.writeHead('404',{
            'Content-type':'text/html'
        })
        res.end('<h1>Page not found</h1>');
    }    
})

server.listen('8000','127.0.0.1',()=>{
    console.log('Listening on port 8000')
})
// Non blocking

// fs.readFile('./starter/txt/start.txt','utf-8', (err,data1)=>{
//     fs.readFile(`./starter/txt/${data1}.txt`,'utf-8', (err,data2)=>{
//         console.log(data2); // reads in background
//         fs.readFile('./starter/txt/append.txt','utf-8', (err,data3)=>{
//             console.log(data3); // reads in background

//             fs.writeFile('.starter/txt/final1.txt',`${data2}\n${data3}`,'utf-8',err=>{
//                 console.log('File has been written 🤪');
//             })    
//         })
//     })
// })

// console.log('Will read file')