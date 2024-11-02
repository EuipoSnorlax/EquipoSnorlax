// Create a ItemsController class
class OpcionesInventario {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    agregarProducto(name, description, imageUrl) {
        const producto = {
            // Increment the currentId property
            name: name,
            img: imageUrl,
            description: description,
            id: this.currentId++
        };

        // Push the item to the items property
        this.items.push(producto);
    }
}



