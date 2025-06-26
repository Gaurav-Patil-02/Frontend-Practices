// let sqr = (n) => (
//     n * n
// )

// console.log(sqr(5));


// let id = setInterval( () => {
//     console.log("Hello word");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

let arr = [10,2,1,54,68,52];

// let ans = arr.every ((el) => (el % 10 == 0));
// console.log(ans);

// let min = arr.reduce((res, el) => {
//     if(res > el){
//         return el;
//     }else{
//         return res;
//     }
// });

// console.log(min);


// let squr = arr.map((el) => (el * el));
// console.log(squr);

// let finalVal = arr.reduce((res, el) => (res + el));
// console.log(finalVal);

// let newArr = arr.map((el) => (el + 5));
// console.log(newArr);

// let char = ['g','a','u','r','a','v'];

// let newArr = char.map((el) => (el.toUpperCase()));
// console.log(newArr);



let obj1 = {
    name : 'gauarav',
    class : 'BTech'
}

let obj2 = {
    rollNo : 104,
    prn : 2151031245143
}


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

console.log(mergeObjects(obj1, obj2));