// step 1 create object express
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
// step 2 routing

// IT students
const itStudents = [
    {id:61,name:'Phoenix IT'},
    {id:62,name:'Mia IT'}
];
// CE students
const ceStudents = [
    {id:71,name:'Edgeworth CE'},
    {id:72,name:'Karma CE'}
];

//major
const allMajors = {
    'it':itStudents,
    'ce':ceStudents
};

//route
app.get('/api/:major',(req,res,next)=>{
    const major = req.params.major.toLowerCase();
    if(major == 'it'){
        const jsonString = JSON.stringify(itStudents)
        req.myobj = jsonString;
        next();
    }else if(major == 'ce'){
        const jsonString = JSON.stringify(ceStudents)
        req.myobj = jsonString;
        next();
    }else{
        res.send('Wrong parameter');
    }
},(req,res)=>{
    req.myobj += ' End of Data';
    res,send(req.myobj);
});
// route2
app.get('/api/:id/:major',(req,res)=>{
    const id = req.params.id;
    const major = req.params.major.toLowerCase();

    if(allMajors[major]){
        if(major == 'it'){
            let stuData = itStudents.find(obj => obj.id === parseInt(id));
            if (typeof stuData === 'undefined'){
                res.send('This student is no in major IT');
            }else{
                res.send(stuData);
            }
        }else{
            let stuData = ceStudents.find(obj => obj.id === parseInt(id));
            if(typeof stuData === 'undefined'){
                res.send('This student is no in major CE');
            }else{
                res.send(stuData);
            }
        }
    }else{
        res.send('Major not Found!!!');
    }
});
//step 3 listen
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`)
});