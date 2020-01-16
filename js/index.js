document.addEventListener('DOMContentLoaded', ()=> {
    const searchField = document.querySelector('#searchGoods');
    const searchButton = document.querySelector('#search-btn');
    const cart = document.querySelector('#cart');
    const wishlist = document.querySelector('#wishlist');
    const logoHeader = document.querySelector('.logo');


    searchField.addEventListener('click', () => {
        console.log('search');
    });
    searchButton.addEventListener('click', () => {
        console.log('searchButton');
    });
    cart.addEventListener('click', () => {
        console.log('cart');
    });
    wishlist.addEventListener('click', () => {
        console.log('wishlist');
    });
    logoHeader.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('logo');
    });


});