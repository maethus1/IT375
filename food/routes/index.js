const express =require('express');
const router = express.Router();
// import data
const restaurantsObj = require('../data');


// render Web
router.get('/',(req,res)=>{
    res.render('main',{restaurants:restaurantsObj}); // main.ejs
});

module.exports = router;