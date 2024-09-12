// let obj=
// {
//     fname:"yash",
//     age:18,
//     hobby:"cricket"


// };

// console.log(obj);
// obj.movie="3 idiots"

// console.log(obj);

let obj = {
    fname: "yash",
    age: 18,
    hobby: "cricket",
    movie: "3 idiots"
}

let obj2 = {...obj};
console.log(obj2);

// obj2.movie="golmaal"
// console.log(obj2);
// console.log(obj);

// let obj3=Object.assign({},obj2);
// obj3.movie="Dhamaal"
// console.log(obj3);


// let obj4={
//     heigh:151
// }

// let obj5=Object.assign({},obj2,obj4);
// console.log(obj5);

let obj6={};

for (k in obj2)
{
    obj6[k]=obj2[k];
}

console.log(obj6);
