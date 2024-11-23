const cardData = [

    {
        "id": 1,
        "name": "Collar Ajustable para Perros",
        "price": 15.99,
        "description": "Collar resistente y ajustable, disponible en varios colores.",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgYnwQe8iPTQKYvRmvDOeEzPT-gsScASRfiQTCGOpbS3EGq9BLKRsmi6u_HfipUNxOuLLnrrv5XDr3ZSxxVDI6qrGH4N06IdTCmMeFcJiw&usqp=CAc",
        "category": "Accesorios",
        "stock": 25
    },
    {
        "id": 2,
        "name": "Comida Premium para Gatos",
        "price": 24.99,
        "description": "Bolsa de 2 kg de alimento balanceado para gatos adultos.",
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSi8GLSldv-aJ7rJNAPhrBLV4a8LbXCseIfOIHaQpuc51nkWc2YbLJjoFtNDKR-edKu3vl4tW928UCJl120kKtF9J6drGBUcdVBW2dbhhispyx8F_fMZQ8vKVB29Xo5y90lu6XCweU&usqp=CAc",
        "category": "Alimentos",
        "stock": 50
    },
    {
        "id": 3,
        "name": "Juguete Interactivo para Mascotas",
        "price": 10.49,
        "description": "Pelota interactiva para mantener entretenidas a tus mascotas.",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZg0rnrg3BMUKlargiR6eyrdlIBe7mf6oMXg4KTl6DZi3_lYGtEOGzBDOb5RP2Cl99gK2XcMl3YlFlCFXv7z2HomNWXRab8BuN5MVnVW9wekTLvTRgQeRdkjQx05L_FTc2GfT0odk&usqp=CAc",
        "category": "Juguetes",
        "stock": 40
    },
    {
        "id": 4,
        "name": "Cama para Perros Grandes",
        "price": 45.99,
        "description": "Cama cómoda y resistente, perfecta para razas grandes.",
        "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVcx1dknsG1uGhkJ-WSdZ_7stRgrlHDa_LGpM8yW69wtwjDfb43YAVfWxjlL8kr4ojBgBLW3MNftMFM_8QfPvlwfEnIbr_qVwkLLWQTw&usqp=CAc",
        "category": "Mobiliario",
        "stock": 10
    },
    {
        "id": 5,
        "name": "Rascador para Gatos",
        "price": 29.99,
        "description": "Rascador con diseño compacto y materiales duraderos.",
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfNLYSAAi1UW2IF-hhOTVBr2EABVly_2Xedp6S2pXSKA73TNUnz0orISIUueVPRT3S9NH8bbTJs_Ngw1VxfOqTzmxNMefqBY6lcHgOOUSXQIT_VzMcS2JL5Z2t&usqp=CAc",
        "category": "Accesorios",
        "stock": 20
    }
]




const container = document.querySelector('.card-container');



cardData.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="card-img">
    <div class="card-body">
      <h5 class="card-title" id = 'name'>${item.name}</h5>
      <p class="card-text">${item.description}</p>
      <p class="card-text" id = 'price'><strong>Precio:</strong> $${item.price}</p>
       <div class="card-rating">
      <span class="average-rating">(4.5)</span>
      <span class="average-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
      </span>
      <span class="card-reviews">(230)</span>
    </div>
      <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})"  class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalProduct">Agregar al carrito</button>
    </div>
  `;
    container.appendChild(card);
});






// Array para almacenar los productos en el carrito
let cart = [];

// Función para agregar productos al carrito
function addToCart(id, name, price) {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === id);
    
    if (existingProduct) {
        // Si ya existe, solo aumentar la cantidad
        existingProduct.quantity += 1;
    } else {
        // Si no existe, agregarlo como nuevo producto
        cart.push({ id, name, price, quantity: 1 });
    }

    // Actualizar el carrito visualmente
    updateCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(id) {
    // Eliminar producto del carrito
    cart = cart.filter(item => item.id !== id);

    // Actualizar el carrito visualmente
    updateCart();
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    updateCart();
}

// Función para actualizar el contenido del carrito
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');

    // Limpiar el contenido actual del carrito
    cartItemsDiv.innerHTML = '';

    // Variables para calcular el total
    let total = 0;

    // Mostrar productos en el carrito
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Cantidad: ${item.quantity}</p>
            <p>Precio: $${item.price * item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
            <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Agregar al carrito</button>
        `;
        cartItemsDiv.appendChild(cartItemDiv);

        // Sumar al total
        total += item.price * item.quantity;
    });

    // Actualizar el precio total
    totalPriceSpan.textContent = total;
}



