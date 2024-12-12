// Cart Array to Store Products
let cart = [];

// Function to Add to Cart
function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        alert(`${itemName} is already in the cart.`);
    } else {
        cart.push({ name: itemName, price: itemPrice });
        alert(`${itemName} has been added to the cart.`);
        updateCart();
    }
}

// Function to Remove from Cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    alert(`${itemName} has been removed from the cart.`);
    updateCart();
}

// Function to Update Cart Modal
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ৳${item.price}
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(li);
    });
}

// Function to Open Cart Modal
function openCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "block";
}

// Function to Close Cart Modal
function closeCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "none";
}

// Function to Search Products
function searchProduct() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".item");

    products.forEach(product => {
        const productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = "flex"; // Show matched product
        } else {
            product.style.display = "none"; // Hide non-matched product
        }
    });
}

// Function to Redirect to Home
function goHome() {
    window.location.href = "index.html"; // Assuming index.html is your home page
}