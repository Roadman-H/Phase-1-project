let iconCart = document.querySelector('.icon-Cart');
let closeCart = document.querySelector('.close')
let body = document.querySelector('body');
let listProductHTML = document.querySelector('listProduct');

let listProducts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
