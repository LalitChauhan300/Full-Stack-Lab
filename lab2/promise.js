let p = new Promise((resolve,reject)=>{
    resolve();
})
console.log(p);

let q = new Promise((resolve,reject)=>{
    reject();
})
console.log(q);
let r = new Promise((resolve,reject)=>{
})
console.log(r);
