const productAdd = document.querySelectorAll('.product__add');
const productQuantity = document.querySelectorAll('.product__quantity-control');
const cartProducts = document.querySelector('.cart__products');

for (let item of productQuantity) {
    item.addEventListener('click', change);
}

for (let item of productAdd) {
    item.addEventListener('click', add);
}

function change(event) {
    let value = event.target.parentNode.querySelector('.product__quantity-value'); 
    let number = Number(value.innerText);

    if (this.classList.contains('product__quantity-control_inc')) {        
        value.textContent = number + 1;
    } else {
        if (number > 1) {
            value.textContent = number - 1;
        } else {
            value.textContent = 1;
        }
    }
}

function add(event) {
    let id = event.target.closest('.product').dataset.id;
    let count = event.target.closest('.product').querySelector('.product__quantity-value').innerText;
    let image = event.target.closest('.product').querySelector('img').getAttribute('src');

    for (let item of cartProducts.children) {
        if (item.dataset.id === id) {
            let productCount = item.querySelector('.cart__product-count');  
            productCount.textContent = Number((productCount).innerText) + Number(count);
            return false
        }        
    }

    let code = `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src="${image}"><div class="cart__product-count">${count}</div></div>`;

    cartProducts.insertAdjacentHTML('beforeEnd', code);
}