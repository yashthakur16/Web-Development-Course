

const t1=performance.now();

for(let i=1;i<=100;i++)
{
    let para=document.createElement('p');
    para.textContent='This is Para'+i;
    document.body.appendChild(para);
}

const t2=performance.now();

console.log("total time taken by code 1 : " + (t2-t1));

const t3=performance.now();

let mydiv=document.createElement('div');

for(let i=1;i<=100;i++)
{
    let para=document.createElement('p');
    para.textContent='This is Para'+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4=performance.now();

console.log("total time taken by code 2 " + (t4-t3));


const t5=performance.now();

let fragment=document.createDocumentFragment();

for(let i=1;i<=100;i++)
{
    let para=document.createElement('p');
    para.textContent='This is Para'+i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);

const t6=performance.now();

console.log("total time taken by code 3 " + (t6-t5));



