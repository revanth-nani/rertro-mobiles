// Add to cart
function addToCart(productName, price) {
    localStorage.setItem("cartItem", JSON.stringify({ name: productName, price }));
    alert(productName + " added to cart!");
}

// Load order summary
function loadOrderSummary() {
    const item = JSON.parse(localStorage.getItem("cartItem"));
    if (item) {
        document.getElementById("summary-name").textContent = item.name;
        document.getElementById("summary-price").textContent = "₹" + item.price;
    }
}

// Generate Order ID
function generateOrderId() {
    return "WWG-" + (Math.floor(Math.random() * 900000) + 100000);
}

// Submit checkout
function submitOrder(e) {
    e.preventDefault();
    const orderId = generateOrderId();
    window.location.href = "thankyou.html?orderId=" + orderId;
}

// Load order ID on thankyou page
function loadOrderId() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("orderId");
    document.getElementById("order-id").textContent = id;
}
