// let yash=
// {
//     "name": "Yash",
//     "age": 25,
//     "city": "Bangalore",
//     greet : ()=>
//     {
//         console.log("Hello, I am Yash");
//     }
// }
 

// for(let k in yash)
// {
//     console.log(yash[k]);
// }

// console.log(yash)
// yash.greet()
// let rohan=yash
// rohan.name = "Rohan"
// console.log(yash)

// let arr=[1,2,3,4,"kunj"]

// let brr=new Array(1,4,8,9)

// console.log(arr)
// console.log(brr)

// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i])
// }

// arr.pop()
// arr.push("Rohan")
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift("kunj")
// console.log(arr)

// arr.splice(1,1,"Vishrut")
// console.log(arr)


// let arr=[10,20,30,40]


// arr.map((x,y)=>
// {
//     console.log(x*x);
//     console.log(y*y);
// })

// console.log(arr)

// let arr=[1,2,3,4,5,6,7,8,9,10]

// let evenArr=arr.filter((x)=>
// {
//     return x%2===0;
// })

// console.log(evenArr)

// let arr=["Rohan",2,'Vishrut',4,"kunj"]

// let ans=arr.filter((value)=>
// {
//     return typeof(value)==="string"
// })

// console.log(ans)

// let arr=[10,20,30,40]
// let ans=arr.reduce((acc,cur)=>
// {
//     return acc+cur
// },0)
// console.log(ans)
// console.log(arr)

// let arr=[25,31,16,71,22,54,21,12]

// arr.sort((a,b)=>
// {
//     return b-a
// });


// console.log(arr)
// console.log(arr.indexOf(12))

// arr.forEach((i)=>
// {
//     console.log(i)
// })

// let company="Google"

// for(let i of company) 
// {
//     console.log(i)
// }

function getSum(arr)
{
    let sum=0;
    arr.forEach((val)=>sum+=val)
    return sum;
}

let arr=new Array(10,20,30,40,50)
console.log(getSum(arr))