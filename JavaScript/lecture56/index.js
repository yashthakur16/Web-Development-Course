

// let firstPromise= new Promise((resolve, reject) =>
// {
//     console.log("hii");
//     reject(Error("error hai bhai"));
// })


let firstPromise= new Promise((resolve, reject) =>
    {
        let result=true;
        if(result)
        {
            resolve("result is true");
        }
        else
        {
            reject("result is false");
        }
    })

    firstPromise.then((r) =>
    {
        console.log("then says "+r);
    }).catch((error) =>
    {
        console.log("catch says "+error);
    }).finally(()=>console.log("me toh chal rha bhai kuch bhi ho"));

