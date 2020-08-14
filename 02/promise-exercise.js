const getStudent = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
        let name = 'Suchada';
        if(name){
            resolve({stuid:id,stuname:name});
        }else{
                reject(new Error('Cannot get the result'));
            }
        },2000);
    });
}
getStudent(15)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
});