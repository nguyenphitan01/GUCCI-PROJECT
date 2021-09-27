// body

// Header
const header = document.querySelector('.header');
let rect_header = header.getBoundingClientRect();

header.addEventListener("mousemove" , function(event) {
    header.style.backgroundColor = '#fff';
})

header.addEventListener("mouseleave" , function(event) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
})

// List-product
const product = document.querySelector('.list__item2');
const listProduct = document.querySelector('.list__product');
let rect_Product = product.getBoundingClientRect();
let rect_listProduct = listProduct.getBoundingClientRect();

product.addEventListener("mousemove", function(event) {
    listProduct.style.display = 'block';
    header.style.backgroundColor = '#fff';
})

product.addEventListener("mouseleave", function(event) {
    let x = event.clientX;
    let y = event.clientY;
    if( rect_Product.left <= x && x <= rect_Product.right && y <= rect_Product.bottom + 30) {
        listProduct.style.display = 'block';
        header.style.backgroundColor = '#fff';
    }
    else {
        listProduct.style.display = 'none';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
})

listProduct.addEventListener("mousemove", function(event) {
    header.style.backgroundColor = '#fff';
})

listProduct.addEventListener("mouseout", function(event) {
    listProduct.style.display = 'none';
    header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    if(event.target.classList.contains('product__item') || event.target.classList.contains('product__freeShip') 
        || event.target.classList.contains('product__container') || event.target.classList.contains('product__content')
        || event.target.classList.contains('pr__content__item') ) {
        listProduct.style.display = 'block';
        header.style.backgroundColor = '#fff';
    }
})

// Input search overlay
const inputSearch = document.querySelector('.input__search');
const inputOverlay = document.querySelector('.input__overlay');
const closeInputOverlay = document.querySelector('.input__overlay .fa-times');
inputSearch.onclick = function() {
    inputOverlay.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
}

closeInputOverlay.onclick = function() {
    inputOverlay.style.transform = 'translateX(100%)';
    overlay.style.display = 'none';
}

// Navbar
const bar = document.querySelector('.bar__icon');
const navOverlay = document.querySelector('.nav__overlay'); 
const overlay = document.querySelector('.overlay');

bar.onclick = function() {
    navOverlay.style.transform = 'translateX(0%)';
    bar.style.display = 'none';
    overlay.style.display = 'block';
}

// Menu
const closeMenu = document.querySelector('.nav__overlay__menu .fa-chevron-left');
closeMenu.onclick = function() {
    navOverlay.style.transform = 'translateX(-100%)';
    bar.style.display = 'block';
    overlay.style.display = 'none';
}

// Overlay
overlay.onclick = function() {
    navOverlay.style.transform = 'translateX(-100%)';
    bar.style.display = 'block';
    overlay.style.display = 'none';
    inputOverlay.style.transform = 'translateX(100%)';
}

// slider



// Container_content
// section1
// card
// choose color


// footer
const hotlineExtend = document.querySelector('.hotline__extend');
const hotlineClick = document.querySelector('.hotline__extend__click');
const hotlineOverlay = document.querySelector('.hotline__overlay');
const closeHotlineOverlay = document.querySelector('.hotline__overlay .fa-sort-up');
hotlineClick.onclick = () => {
    hotlineOverlay.style.display = 'block';
    hotlineExtend.style.display = 'none';
}

closeHotlineOverlay.onclick = () => {
    hotlineOverlay.style.display = 'none';
    hotlineExtend.style.display = 'block';
}

