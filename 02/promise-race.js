const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('First');
        resolve(1);
    },3000);
});
const myPromise2 = new Promise((resolove,reject)=>{
    setTimeout(()=>{
        console.log('Second');
        resolove(2);
    },2000);
});
Promise.all([myPromise1,myPromise2])
.then((result)=>{
    console.log(result);
});