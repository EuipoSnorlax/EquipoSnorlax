async function loadJSONData(call) {
    try {
        const response = await fetch('/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const productos = await response.json();
        call(productos);
    } catch (error) {
        console.error('Error loading JSON file:', error);
    }
}



// Render items as list-group-items within the #publicaciones-lista container
function renderizarPublicaciones(publicaciones) {
    const lista = document.getElementById('publicaciones-lista');
    lista.innerHTML = '';

    publicaciones.forEach(publicacion => {
        lista.innerHTML += `
            <div class="list-group-item id="product-${publicacion.id}">
                <img src="${publicacion.img}" alt="${publicacion.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
                <strong>${publicacion.name}</strong>
                <p>${publicacion.description}</p>
             
                <button type="button" class="btn btn-danger" onclick="eliminarProducto(${publicacion.id})">Remove</button>
            </div>
        `;
    });

}

// Run render function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadJSONData(renderizarPublicaciones);
});



function agregarProducto(id) {
    const nuevoProducto = document.getElementById(`product-${id}`);
    if (nuevoProducto.name && nuevoProducto.img && nuevoProducto.description) {
        productos.ListaProductos.push(nuevoProducto);
        console.log("El producto se agrego exitosamente ", nuevoProducto);
    } else {
        console.log("Error el nuevo producto debe tener un nombre, imagen y descripción.");
    }
};

function modificarProducto(productos) {
    console.log("Inventario actualizado");
};


let productToRemoveId = null;

function eliminarProducto(id) {
    productToRemoveId = id;
    const removeProductModal = new bootstrap.Modal(document.getElementById('removeProduct'));
    removeProductModal.show();
}


function eliminarTodo() {
    const lista = document.getElementById('publicaciones-lista');
    lista.innerHTML = '';
};


document.getElementById('confirmRemoveBtn').addEventListener('click', function() {
    const productElement = document.getElementById(`product-${productToRemoveId}`);
    if (productElement) {
        productElement.remove();
        console.log(`Producto con ID ${productToRemoveId} eliminado.`);
    } else {
        console.error(`Producto con el id ${productToRemoveId} no encontrado.`);
    }

    // Cerrar el modal
    const removeProductModal = bootstrap.Modal.getInstance(document.getElementById('removeProduct'));
    removeProductModal.hide();
});
