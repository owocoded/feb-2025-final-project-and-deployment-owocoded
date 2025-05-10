function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function displayCart() {
    const table = document.getElementById("cartTable");
    table.innerHTML = "<tr><th>Product</th><th>Price</th><th>Action</th></tr>";

    cart.forEach((item, index) => {
        const row = `<tr>
                        <td>${item.name}</td>
                        <td>$${item.price}</td>
                        <td><button onclick="removeItem(${index})">Remove</button></td>
                     </tr>`;
        table.innerHTML += row;
    });
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Load cart on page load
window.onload = displayCart;