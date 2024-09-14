

// console.log("Yash")

// setTimeout(() => 
// {
//     console.log("Yash Thakur")

// },5000);

// console.log("Thakur")

// let getData=async ()=> 
// {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
// }

// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = 'https://jsonplaceholder.typicode.com/posts/101';

const options=
{
    method: "POST",
    body: JSON.stringify({ username: "Yash Thakur" }),
    headers: myHeaders,
};

async function getData() 
{
    const response = await fetch(url);
    let data = await response.json();
    console.log("get response data ", data);

}

async function postData() 
{
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("post response data ", data);

}

async function processData() 
{
    await postData()
    await getData()
    
    

}

processData()


// const response = await fetch("https://example.org/post", {
//   method: "POST",
//   body: JSON.stringify({ username: "example" }),
//   headers: myHeaders,
// });