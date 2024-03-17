// const readline = require('readline');

// const work = readline.Interface({
//     input: process.stdin,
//     output: process.stdout
// });

// work.question("Enter your Name",(name)=>{
//     console.log("Your name is "+name);
//     work.close();
// })

// work.on('close',()=>{
//     console.log("Interface closed");
// })





// const fs = require('fs');

// const text = fs.readFileSync('./files/hello.txt','utf-8');
// console.log(text);

// let content = `data that file has ${text} \n created date: ${new Date()}`;
// fs.writeFileSync('./files/hello.txt',content);






// const fs = require('fs');

// fs.readFile('./files/damn.txt','utf-8',(error,data)=>{
//     console.log(data);
//     fs.readFile(`./files/${data}.txt`,'utf-8',(error1,data1)=>{
//         console.log(data1);
//         fs.readFile('./files/append.txt','utf-8',(error2,data2)=>{
//             console.log(data2);
//             fs.writeFile('./files/output.txt',`${data}\n\n ${data1}\n\n ${data2}\n\n\n created date : ${new Date()}`,()=>{
//                 console.log('File is Written Successfully');
//             });
//         })
//     })
// })

// console.log('File is reading...');





// const fs = require('fs');

// const http = require('http');
// const home = fs.readFileSync('./template/home.html','utf-8'); 

// const server =  http.createServer((request,response)=>{
//     console.log('A new Requset is arrived');
//     response.end(home);

// });

// server.listen(8000,'127.0.0.1',()=>{
//     console.log('server is running...');
// })





// const fs = require('fs');
// const http = require('http');

// const home = fs.readFileSync('./template/home.html','utf-8'); 

// const server =  http.createServer((request,response)=>{
//     let path = request.url;

//     if(path == '/' || path.toLocaleLowerCase() == '/home'){
//         response.end(home.replace('{{%Content%}}','This is HomePage'));
//     }
//     else if(path.toLocaleLowerCase()=='/about'){
//         response.end(home.replace('{{%Content%}}','This is About Page'));
//     }
//     else if(path.toLocaleLowerCase()=='/login'){
//         response.end(home.replace('{{%Content%}}','This is Login Page'));
//     }
//     else{
//         response.end('Error 404 : Page is not found');
//     }
// });

// server.listen(8000,'127.0.0.1',()=>{
//     console.log('server is running...');
// })






// const server =  http.createServer((request,response)=>{
//     //let path = request.url;
//     let {query, pathname: path} = url.parse(request.url,true);

//     if(path == '/' || path.toLocaleLowerCase() == '/home'){ 
//         response.writeHead(200,{
//             'Content-Type' : 'text/html',
//             'my-header' : 'Hello World'
//         });
//         response.end(home.replace('{{%Content%}}','This is HomePage'));
//     }
//     else if(path.toLocaleLowerCase()=='/about'){
//         response.writeHead(200,{
//             'Content-Type' : 'text/html',
//             'my-header' : 'Hello World'
//         });
//         response.end(home.replace('{{%Content%}}','This Is about Page','{{ITEMS}}',' '));
//     }
//     else if(path.toLocaleLowerCase()=='/login'){
//         response.writeHead(200,{
//             'Content-Type' : 'text/html',
//             'my-header' : 'Hello World'
//         });
//         response.end(home.replace('{{%Content%}}','This is Login page'));
//     }
//     else if(path.toLocaleLowerCase() == '/product'){
//         response.writeHead(200,{
//             'Content-Type' : 'text/html'
//         });

//         if(!query.id){

//         let productlist = product.map(prod=>{
//             return replacehtml(productitems,prod)   
//         })
//         let producthtmlresponse = home.replace('{{%Content%}}',productlist.join(' '));
//         response.end(producthtmlresponse);
//         }
//         else{
//             let x = product[query.id];
//             let itemresponse = replacehtml(item,x);
//             let y = home.replace('{{%Content%}}',itemresponse);
//             response.end(y);
//         }
//     }
//     else{
//         response.writeHead(404,{
//             'Content-Type' : 'text/html',
//             'my-header' : 'Hello World'
//         });
//         response.end(home.replace('{{%Content%}}','Error 404 : Page is not found'));
//     }
// });





// const fs = require('fs');
// const http = require('http');

// const server = http.createServer();

// server.on('request',(request,response)=>{
//     let rs = fs.createReadStream('./files/bigdata.txt');

//     rs.on('data',(chunk)=>{
//         response.write(chunk);
        
//     })

//     rs.on('end',()=>{
//         res.end();
//     })

//     rs.on('error',(err)=>{
//         response.end(err);
//     })


// })

// server.listen(8000,'127.0.0.1',()=>{
//     console.log('server is running...');
// });







// const fs = require('fs');
// const http = require('http');

// const server = http.createServer();

// server.on('request',(request,response)=>{
//     let rs = fs.createReadStream('./files/bigdata.txt');
//     rs.pipe(response);
// })

// server.listen(8000,'127.0.0.1',()=>{
//     console.log('server is running...');
// });










const fs = require('fs');
const http = require('http');
const url = require('url');


const replacehtml = require('./Modules/replacehtml');
const userevent = require('./Modules/eventemit');

let product = JSON.parse(fs.readFileSync('./JSON data/products.json','utf-8'));
let productitems = fs.readFileSync('./template/productitems.html','utf-8');
let item = fs.readFileSync('./template/item.html','utf-8');




const home = fs.readFileSync('./template/home.html','utf-8'); 

const server = http.createServer();

server.on('request',(request,response)=>{
    //let path = request.url;
    let {query, pathname: path} = url.parse(request.url,true);

    if(path == '/' || path.toLocaleLowerCase() == '/home'){ 
        response.writeHead(200,{
            'Content-Type' : 'text/html',
            'my-header' : 'Hello World'
        });
        response.end(home.replace('{{%Content%}}','This is HomePage'));
    }
    else if(path.toLocaleLowerCase()=='/about'){
        response.writeHead(200,{
            'Content-Type' : 'text/html',
            'my-header' : 'Hello World'
        });
        response.end(home.replace('{{%Content%}}','This Is about Page','{{ITEMS}}',' '));
    }
    else if(path.toLocaleLowerCase()=='/login'){
        response.writeHead(200,{
            'Content-Type' : 'text/html',
            'my-header' : 'Hello World'
        });
        response.end(home.replace('{{%Content%}}','This is Login page'));
    }
    else if(path.toLocaleLowerCase() == '/product'){
        response.writeHead(200,{
            'Content-Type' : 'text/html'
        });

        if(!query.id){

        let productlist = product.map(prod=>{
            return replacehtml(productitems,prod)   
        })
        let producthtmlresponse = home.replace('{{%Content%}}',productlist.join(' '));
        response.end(producthtmlresponse);
        }
        else{
            let x = product[query.id];
            let itemresponse = replacehtml(item,x);
            let y = home.replace('{{%Content%}}',itemresponse);
            response.end(y);
        }
    }
    else{
        response.writeHead(404,{
            'Content-Type' : 'text/html',
            'my-header' : 'Hello World'
        });
        response.end(home.replace('{{%Content%}}','Error 404 : Page is not found'));
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server is running...');
});

let myemit = new userevent();

myemit.on('usercreated',(id,name)=>{
    console.log(`A new user ${name} with ${id} is created`);
});

myemit.on('usercreated',(id,name)=>{
    console.log(`A new user ${name} with ${id} is Added to database`);
});

myemit.emit('usercreated',101,'john');