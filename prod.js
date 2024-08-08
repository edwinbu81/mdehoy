const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

// Parte donde se agregan productos al carrito
const rowProduct = document.querySelector('.row-product');

// Lista de productos en el carrito
const productsList = document.querySelector('.container-items');

// Variable para agregar los productos
let allProducts = [];

const valorTotal = document.querySelector('.total.pagar');
const countProducts = document.querySelector('#contador-productos');

// Evento para agregar productos al carrito
productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        // aquí verificamos la lista de productos existentes
        const exists = allProducts.some(prod => prod.title === infoProduct.title);
        if (exists) {
            // Actualizar cantidad
            allProducts = allProducts.map(prod => {
                if (prod.title === infoProduct.title) {
                    prod.quantity++;
                    return prod;
                } else {
                    return prod;
                }
            });
        } else {
            // Agregar nuevo producto
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

// Función para mostrar resultados en HTML
const showHTML = () => {
    rowProduct.innerHTML = ''; // limpiar contenido previo

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close" data-title="${product.title}">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        `;
        rowProduct.append(containerProduct);

        const price = parseFloat(product.price.replace(/[^\d.-]/g, ''));
        total += product.quantity * price;
        totalOfProducts += product.quantity;
    });

    valorTotal.innerText = `$${total.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    countProducts.innerText = totalOfProducts;
};

// Para eliminar productos del carrito
rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const title = e.target.getAttribute('data-title');
        allProducts = allProducts.filter(product => product.title !== title);
        showHTML();
    }
});