
// function greetMe(fullname,greet) 
// {
//     console.log(fullname+" says");
//     greet();

// }


// function greet(){
//     console.log("Hello, World!");
// }

// greetMe("Yash Thakur",greet)


// function solve(num)
// {
//     return function(val)
//     {
//         console.log(num);
//         return val + num;
//     }
// }

// let ans=solve(95);
// console.log(ans(5));


let arr= 
[
    function (a,b)
    {
        return a+b;
    },
    function (a,b)
    {
        return a-b;
    },
    function (a,b)
    {
        return a*b;
    }
    ,
    function (a,b)
    {
        return a/b;
    }

];

console.log(arr[0](5,10));

let b=arr[1];

console.log(b(10,18))