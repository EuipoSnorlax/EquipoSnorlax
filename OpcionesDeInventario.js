// Create a ItemsController class
class OpcionesInventario {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    agregarProducto(name, description, image) {
        const producto = {
            // Increment the currentId property
            code: code,
            name: name,
            description: description,
            image: image,
            price: price,
            priceVIP: priceVIP,
            department: department,
            inventoryCheck: inventoryCheck,
            amount: amount,
            amountMin: amountMin,
            id: this.currentId++  
        };
        
        // Push the item to the items property
        this.items.push(producto);
    }
}



