let newElement = document.createElement('p')
newElement.textContent ="I am the new element"
let tag=document.querySelector('.mydiv')
tag.insertAdjacentElement('beforeend',newElement)
let a=document.querySelector('h1')
tag.removeChild(a)