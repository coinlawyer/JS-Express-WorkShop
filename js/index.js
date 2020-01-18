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
    
    const closeCart = event => {
        const target = event.target;
        if (target === cartModal ||
            target.className === 'cart-close' ||
            event.code === 'Escape') { // or target.classList.contains('cart-close') or event.keyCode === 27
            cartModal.style.display = 'none';
            document.removeEventListener('keydown', closeCart);
        }
    };
    
    const openCart = event => {
        event.preventDefault();
        cartModal.style.display = 'flex';
        document.addEventListener('keydown', closeCart);
    };
    
    cartIcon.addEventListener('click', openCart);
    cartModal.addEventListener('click', closeCart);
    
    const renderCart = items => {
        goodsWrapper.textContent = '';
        items.forEach(({ id, title, price, imgMin }) => { // we could make destructuring while passing arguments to the function!!!
            // const { id, title, price, imgMin } = item; - was before passing destr arguments 
            goodsWrapper.appendChild(createCart(id, title, price, imgMin));
        });
    };

    const getGoods = (handlerGoods) => {
        fetch('db/db.json')
        .then(response => response.json())
        .then(handlerGoods);
    };
    
    getGoods(renderCart);



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

    // fetch('https://jsonplaceholder.typicode.com/photos/1'). // free test API on https://jsonplaceholder.typicode.com/
    //     then(response => response.json()).
    //     then(response => console.log(response));