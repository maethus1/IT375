const express = require('express');
const app = express();

const restaurantsRouter = require('./routes/restaurants');
const port = process.env.port || 8000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/api/restaurants',restaurantsRouter);
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listen to request on port${port}`);
});