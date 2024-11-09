// Create a ItemsController class
class SignUpUser {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    
    agregarUsuario(name, midlename, lastname, datebirthday, phone, email , password) {
        const user = {
            // Increment the currentId property
            name: name,
            midlename: midlename,
            lastname: lastname,
            datebirthday: datebirthday,
            phone: phone,
            email: email,
            password: password,
            id: this.currentId++  
        };
        
        // Push the item to the items property
        this.items.push(user);
    }
}


function showAlertErroOne(type,message) {
    alertContainer.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">

        ${message}

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

        </div>`
}





