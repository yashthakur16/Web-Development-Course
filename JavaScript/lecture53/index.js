

// function changeText()
// {
//     let fpara=document.getElementById("fpara");
//     fpara.textContent="Welcome"
// }

// let fpara=document.getElementById("fpara");

// fpara.addEventListener('click',changeText);
//fpara.removeEventListener('click',changeText);

// function defaultChange()
// {
//     let fanchor=document.getElementById("fanchor");
//     event.preventDefault();
//     fanchor.textContent="click hogaya bro"
// }

// let fanchor=document.getElementById("fanchor");
// fanchor.addEventListener('click',defaultChange);

function alertPara(Event)
{
    alert("you have clicked on para "+ Event.target.textContent);
}


// let para=document.getElementsByTagName('p');

// for(let i=0;i<para.length;i++)
// {
//     para[i].addEventListener('click',alertPara);
// }

document.addEventListener('click',alertPara);