//


window.addEventListener("load", () => {
    /* ----------------------------------------
            Page Loader
    ------------------------------------------- */
    document.querySelector(".js-page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".js-page-loader").style.display = "none";
    }, 600);
});



/* ----------------------------------------
           Button conocenos
------------------------------------------- */

function scrollToElement(params) {
    document.getElementById("click").scrollIntoView({
        behavior: "smooth" 
    })
}




/* ----------------------------------------
            Testimonial Slider
------------------------------------------- */
const testimonialSlider = () => {
    const carouselOne = document.getElementById('carouselOne');
    carouselOne && carouselOne.addEventListener('slid.bs.carousel', () => {
        const activeItem = carouselOne.querySelector(".active");
        document.querySelector(".js-testimonial-img").src = activeItem ? activeItem.getAttribute("data-js-testimonial-img") : '';
    });
};
testimonialSlider();






/* ----------------------------------------
            Validation Form
------------------------------------------- */
if (document.body.classList.contains('contact-page')) {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
    
        // Validate the input fields
        if (validateForm()) {
            // Send the email if validation passes
            sendEmail();
        }
    });
}


// Boring Option:
// function validateForm() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const telephone = document.getElementById('telephone').value;
//     const message = document.getElementById('message').value;
//     const errorMessage = document.getElementById('errorMessage');

//     errorMessage.innerHTML = ''; // Clear previous error messages

//     // Simple validation checks
//     if (!name) {
//         errorMessage.innerHTML += 'Name is required.<br>';
//         return false;
//     }
//     if (!validateEmail(email)) {
//         errorMessage.innerHTML += 'Invalid email format.<br>';
//         return false;
//     }
//     if (!validateTelephone(telephone)) {
//         errorMessage.innerHTML += 'Invalid telephone format.<br>';
//         return false;
//     }
//     if (!message) {
//         errorMessage.innerHTML += 'Message is required.<br>';
//         return false;
//     }

//     return true; // All validations passed
// }

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.innerHTML = ''; // Clear previous error messages

    // Validation checks
    const isNameValid = name ? true : (errorMessage.innerHTML += 'Se requiere un nombre.<br>', false);
    const isEmailValid = validateEmail(email) ? true : (errorMessage.innerHTML += 'Formato de email no válido.<br>', false);
    const isTelephoneValid = validateTelephone(telephone) ? true : (errorMessage.innerHTML += 'Formato de teléfono no válido.<br>', false);
    const isMessageValid = message ? true : (errorMessage.innerHTML += 'Se requiere un mensaje.<br>', false);

    return isNameValid && isEmailValid && isTelephoneValid && isMessageValid; // All validations passed
}


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateTelephone(telephone) {
    const telPattern = /^\d{10}$/;
    return telPattern.test(telephone);
}

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;

    // Console
    console.log("Sending email with the following data:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Telephone: ${telephone}`);
    console.log(`Message: ${message}`);

    // Clear the form after sending... Allons-y !!!
    document.getElementById('contactForm').reset();
}



/* ----------------------------------------
            New User Validation T-9
------------------------------------------- */


if (document.body.classList.contains('registration-page')) {
    document.getElementById('productRegistrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
    
        // Validate the input fields
        if (validateNewUser()) {
            // Send the email if validation passes
            alertMessage= "🐈🐕--Te has Registrado Correctamente --🐈🐕";
            showAlertAccount("success", alertMessage);
            const registro = new SignUpUser();
            registro.agregarUsuario(document.getElementById('registerName').value, document.getElementById('registerMidleName').value, document.getElementById('registerLastName').value, document.querySelector('input.registerBirthDay').value, document.getElementById('registerPhone').value, document.querySelector('input.emailUser').value, document.getElementById('registerPassword').value);
            //console.log(registro.items);
            const userObjectJSON = JSON.stringify(registro.items);
            console.log(userObjectJSON);
        }
    });
}

function validateNewUser() {
    const name = document.getElementById('registerName').value;
    const email = document.querySelector('input.emailUser').value;
    const telephone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const ageUser = document.querySelector('input.registerBirthDay').value;
    //const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.innerHTML = ''; // Clear previous error messages

    // Validation checks
    const isNameValid = name ? true : (errorMessage.innerHTML += 'Se requiere un nombre.<br>', false);
    //const isEmailValid = validateEmail(email) ? true : (errorMessage.innerHTML += 'Formato de email no válido.<br>', false);
    const isEmailValid = validateEmail(email) ? true : (showAlertErroOne("danger", "Formato de email no válido"), false);
    //const isTelephoneValid = validateTelephone(telephone) ? true : (errorMessage.innerHTML += 'Formato de teléfono no válido.<br>', false);
    const isTelephoneValid = validateTelephone(telephone) ? true : (showAlertErroOne("danger", "Formato de teléfono no válido"), false);
    //const isPasswordValid = validatePassword(password) ? true : (errorMessage.innerHTML += 'La contraseña debe tener al menos 8 caracteres.<br>', false);
    const isPasswordValid = validatePassword(password) ? true : (showAlertErroOne("danger", "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."), false);
    //const isMessageValid = message ? true : (errorMessage.innerHTML += 'Se requiere un mensaje.<br>', false);
    const isAgeValid = validateEdad(ageUser) ? true : (showAlertErroOne("danger", "Tienes que ser mayor de edad para poderte registrar"), false);

    return isNameValid && isEmailValid && isTelephoneValid && isPasswordValid && isAgeValid; // All validations passed
}

function validatePassword(password) {
    const password1 = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    return password1.test(password);
}


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateEdad(edad1){
 const hoy = new Date();
 const nacimiento = new Date(edad1);
 let edad = hoy.getFullYear() - nacimiento.getFullYear();
 const mes = hoy.getMonth() - nacimiento.getMonth();
 if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
     edad--;
 }
 return edad >= 18;
}

function showAlertAccount(type,message) {
    const alert1 = document.getElementById("alertContainer");
    alertContainer.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">

        ${message}

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

    </div>`;

}




/* ----------------------------------------
            Header Menu
------------------------------------------- */
function headerMenu() {
    const menu = document.querySelector(".js-header-menu"),
    backdrop = document.querySelector(".js-header-backdrop"),
    menuCollapseBreakpoint = 991;

    function toggleMenu() {
        menu.classList.toggle("open");
        backdrop.classList.toggle("active");
        document.body.classList.toggle("overflow-hidden");
    }

    document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
        item.addEventListener("click", toggleMenu);
    });

    // Closing Menu by clicking outside of it.
    backdrop.addEventListener("click", toggleMenu);

    function collapse() {
        menu.querySelector(".active .js-sub-menu").removeAttribute("style");
        menu.querySelector(".active").classList.remove("active");
    }

    menu.addEventListener("click", (event) => {
        const { target } = event;

        if (target.classList.contains("js-toggle-sub-menu") && window.innerWidth <= menuCollapseBreakpoint) {
            // Prevent Default Anchor Click Behavior
            event.preventDefault();

            // If The Item is already expanded, collapse it and exit
            if (target.parentElement.classList.contains("active")) {
                collapse();
                return;
            }

            // Collapse The Other Expanded Menu Item IF it exists.
            if (menu.querySelector(".active")) {
                collapse();
            }

            // Expand New Menu-Item
            target.parentElement.classList.add("active");
            target.nextElementSibling.style.maxHeight = target.nextElementSibling.scrollHeight + "px";
        }
    });

    // When resizing window...
    window.addEventListener("resize", function() {
        if (this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open")) {
            toggleMenu();
        }

        if (this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active")) {
            collapse();
        }
    });
}
headerMenu();



/* ----------------------------------------
            Style Switcher
------------------------------------------- */
function styleSwitcherToggle() {
    const styleSwitcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

    styleSwitcherToggler.addEventListener("click", function() {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");
        this.querySelector("i").classList.toggle("fa-cog");
    });
}
styleSwitcherToggle();





/* ----------------------------------------
            Theme Colors
------------------------------------------- */
function themeColors() {
    const colorStyle = document.querySelector(".js-color-style"),
    themeColorsContainer = document.querySelector(".js-theme-colors");

    themeColorsContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColor();
        }
    });

    function setColor() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

        if (document.querySelector(".js-theme-color-item.active")) {
            document.querySelector(".js-theme-color-item.active").classList.remove("active");
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    }

    if (localStorage.getItem("color") !== null) {
        setColor();
    } else {
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");
    }
}
themeColors();



/* ----------------------------------------
            Light & Dark Mode
------------------------------------------- */
function themeLightDark() {
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    darkModeCheckbox.addEventListener("click", function() {
        if (this.checked) {
            localStorage.setItem("theme-dark", "true");
        } else {
            localStorage.setItem("theme-dark", "false");
        }
        themeMode();
    });

    function themeMode() {
        if (localStorage.getItem("theme-dark") === "false") {
            document.body.classList.remove("t-dark");
        } else {
            document.body.classList.add("t-dark");
        }
    }
    if (localStorage.getItem("theme-dark") !== null) {
        themeMode();
    }

    if (document.body.classList.contains("t-dark")) {
        darkModeCheckbox = true;
    }
}
themeLightDark();



/* ----------------------------------------
            Glass Effect
------------------------------------------- */
function themeGlassEffect() {
    const glassEffectCheckbox = document.querySelector(".js-glass-effect"),
    glassStyle = document.querySelector(".js-glass-style");

    glassEffectCheckbox.addEventListener("click", function() {
        if (this.checked) {
            localStorage.setItem("glass-effect", "true");
        } else {
            localStorage.setItem("glass-effect", "false");
        }
        glass();
    });

    function glass() {
        if (localStorage.getItem("glass-effect") === "true") {
            glassStyle.removeAttribute("disabled");
        } else {
            glassStyle.disabled = true;
        }
    }

    if (localStorage.getItem("glass-effect") !== null) {
        glass();
    }

    if (!glassStyle.hasAttribute("disabled")) {
        glassEffectCheckbox.checked = true;
    }
}
themeGlassEffect();

/* ----------------------------------------
            User SignUp Form
------------------------------------------- */

function userSignUpForm() {
    const userObject = {
        code: '',
        name: '',
        description: '',
        image: '',
        price: '',
        priceVIP: '',
        department: '',
        inventoryCheck: '',
        amount: '',
        amountMin: '',
    };

    const productForm = document.querySelector("#productRegistrationForm");
    const code = document.querySelector("#productCode");
    const name = document.querySelector("#productImage");
    const description = document.querySelector("#productDescription");
    const image = document.querySelector("#productImage");
    const price = document.querySelector("#productPrice");
    const priceVIP = document.querySelector("#productPriceVIP");
    const department = document.querySelector("#productDepartment");
    const inventoryCheck = document.querySelector("#productInventoryCheck");
    const amount = document.querySelector("#productAmount");
    const amountMin = document.querySelector("#productMin");
    
    productForm.addEventListener("submit", (event) => {
        event.preventDefault();
        productObject.code = code.value;
        productObject.name = name.value;
        productObject.description = description.value;
        productObject.image = image.value;
        productObject.price = price.value;
        productObject.priceVIP = priceVIP.value;
        productObject.department = department.value;
        productObject.inventoryCheck = inventoryCheck.value;
        productObject.amount = amount.value;
        productObject.amountMin = amountMin.value;

        
        const productObjectJSON = JSON.stringify(productObject);
        console.log(productObjectJSON);
    }); 
}
productRegistrationForm();




/* ----------------------------------------
            Product Registration Form
------------------------------------------- */

function productRegistrationForm() {
    const productObject = {
        code: '',
        name: '',
        description: '',
        image: '',
        price: '',
        priceVIP: '',
        department: '',
        inventoryCheck: '',
        amount: '',
        amountMin: '',
    };

    const productForm = document.querySelector("#productRegistrationForm");
    const code = document.querySelector("#productCode");
    const name = document.querySelector("#productImage");
    const description = document.querySelector("#productDescription");
    const image = document.querySelector("#productImage");
    const price = document.querySelector("#productPrice");
    const priceVIP = document.querySelector("#productPriceVIP");
    const department = document.querySelector("#productDepartment");
    const inventoryCheck = document.querySelector("#productInventoryCheck");
    const amount = document.querySelector("#productAmount");
    const amountMin = document.querySelector("#productMin");
    
    productForm.addEventListener("submit", (event) => {
        event.preventDefault();
        productObject.code = code.value;
        productObject.name = name.value;
        productObject.description = description.value;
        productObject.image = image.value;
        productObject.price = price.value;
        productObject.priceVIP = priceVIP.value;
        productObject.department = department.value;
        productObject.inventoryCheck = inventoryCheck.value;
        productObject.amount = amount.value;
        productObject.amountMin = amountMin.value;

        
        const productObjectJSON = JSON.stringify(productObject);
        console.log(productObjectJSON);
    }); 
}
productRegistrationForm();
/* ----------------------------------------
            Switch Cats and Dogs selector
------------------------------------------- */
function perros(){
    document.getElementById("perros").style.display = "block";
    document.getElementById("gatos").style.display = "none";

    document.getElementById("perrosButton").classList.add("active");
    document.getElementById("gatosButton").classList.remove("active");
}

function gatos(){
    document.getElementById("gatos").style.display = "block";
    document.getElementById("perros").style.display = "none";

    document.getElementById("gatosButton").classList.add("active");
    document.getElementById("perrosButton").classList.remove("active");
}
// 45:25_35,100yards_Biotic_SeNt // //  ML_CerbAg_Opt_Perf  //  //  Warp, Overload & Slam
//
