// step 1 create object express
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

// step 2 using obj express's methods
app.get('/',(req,res)=>{
    res.end('Home Page');
});
app.get('/overview',(req,res)=>{
    res.end('OVERVIEW Page');
});
app.get('/product',(req,res)=>{
    res.end('Product Page');
});
app.get('/api/user',(req,res)=>{
    const userData = {id:15, name: 'Suchada'};
    res.send(userData);
});

//step 3 listen
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`)
});