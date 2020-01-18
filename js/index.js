document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search');
    const searchField = searchForm.querySelector('#searchGoods');
    const searchButton = searchForm.querySelector('#search-btn');
    const cartIcon = document.querySelector('#cart');
    const wishlist = document.querySelector('#wishlist');
    const logoHeader = document.querySelector('.logo');
    const goodsWrapper = document.querySelector('.goods-wrapper');
    const cartModal = document.querySelector('.cart');
    

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

    goodsWrapper.appendChild(createCart(1, 'Darts', 23, 'img/temp/Archer.jpg'));
    goodsWrapper.appendChild(createCart(2, 'Flamingo', 42, 'img/temp/Flamingo.jpg'));
    goodsWrapper.appendChild(createCart(3, 'Socks', 5, 'img/temp/Socks.jpg'));
    goodsWrapper.insertAdjacentElement('afterbegin', createCart(3, 'Socks', 5, 'img/temp/Socks.jpg'));

    const closeCart = (event) => {
        let target = event.target;
        console.log(target);
        if (target === cartModal || target.className === 'cart-close' || event.code === 'Escape') { // or target.classList.contains('cart-close')
            cartModal.style.display = 'none';
        }
    };
    
    const openCart = event => {
        event.preventDefault();
        cartModal.style.display = 'flex';
    };


    document.addEventListener('keydown', closeCart);
    cartIcon.addEventListener('click', openCart);
    cartModal.addEventListener('click', closeCart);

    searchField.addEventListener('click', () => {
        console.log('search');
    });
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('searchButton');
    });
    wishlist.addEventListener('click', () => {
        console.log('wishlist');
    });
    logoHeader.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('logo');
    });


});