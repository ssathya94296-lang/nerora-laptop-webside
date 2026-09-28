// =============================
// SCROLL TO PRODUCTS
// =============================

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}


// =============================
// PRODUCT FILTER
// =============================

function filterProducts(category, button) {

    const products = document.querySelectorAll(".product-card");
    const filters = document.querySelectorAll(".filter");

    filters.forEach(filter => {
        filter.classList.remove("active");
    });

    button.classList.add("active");

    products.forEach(product => {

        if (category === "all") {
            product.style.display = "block";
        }

        else if (product.dataset.category === category) {
            product.style.display = "block";
        }

        else {
            product.style.display = "none";
        }

    });
}


// =============================
// PRODUCT BUTTON
// =============================

function buyProduct(productName) {

    showToast(
        productName + " selected!"
    );

}


// =============================
// CONTACT FORM
// =============================

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    showToast(
        "Thank you " + name + "! Message sent successfully."
    );

    document.querySelector(".contact-form").reset();

}


// =============================
// DEMO BUTTON
// =============================

function showMessage() {

    showToast(
        "Demo video coming soon!"
    );

}


// =============================
// TOAST
// =============================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}


// =============================
// NAVBAR ACTIVE LINK
// =============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "#aaa";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#fff";
        }

    });

});