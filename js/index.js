document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search');
    const searchField = searchForm.querySelector('#searchGoods');
    const searchButton = searchForm.querySelector('#search-btn');
    const cartIcon = document.querySelector('#cart');
    const wishlist = document.querySelector('#wishlist');
    const logoHeader = document.querySelector('.logo');
    const goodsWrapper = document.querySelector('.goods-wrapper');

    const createCart = (id, title, price, img) => {
        const cart = document.createElement('div');
        cart.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        cart.innerHTML = `
            <div class="card">
                <div class="card-img-wrapper">
                    <img class="card-img-top" src="${img}" alt="">
                    <button class="card-add-wishlist"
                    data-item-id="${id}"></button>
                </div>
            <div class="card-body justify-content-between">
                <a href="#" class="card-title">${title}</a>
                <div class="card-price">${price}$</div>
                    <div>
                        <button class="card-add-cart"
                        data-item-id="${id}">Add to cart</button>
                    </div>
                </div>
            </div>`;
        return cart;
    };

    goodsWrapper.appendChild(createCart());
    goodsWrapper.appendChild(createCart());
    goodsWrapper.appendChild(createCart());

    searchField.addEventListener('click', () => {
        console.log('search');
    });
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('searchButton');
    });
    cartIcon.addEventListener('click', () => {
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