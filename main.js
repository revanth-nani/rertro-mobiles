// Add item to cart
function addToCart(productName, price) {
    localStorage.setItem("cartItem", JSON.stringify({ productName, price }));
    alert(productName + " added to cart!");
}

// Load order summary
function loadOrderSummary() {
    const item = JSON.parse(localStorage.getItem("cartItem"));
    if (item) {
        document.getElementById("summary-name").innerText = item.productName;
        document.getElementById("summary-price").innerText = "₹" + item.price;
    }
}

// Generate order ID
function generateOrderId() {
    return "WPG-" + Math.floor(Math.random() * 900000 + 100000);
}

// Form submit → redirect
function submitOrder(event) {
    event.preventDefault();
    const orderId = generateOrderId();
    localStorage.setItem("orderId", orderId);
    window.location.href = "thankyou.html?orderId=" + orderId;
}

// Load order ID on thankyou page
function loadOrderId() {
    const id = new URLSearchParams(window.location.search).get("orderId");
    document.getElementById("order-id").innerText = id;
}
