// =====================
// WildPhones Garage JS
// =====================

// Save cart to localStorage
function addToCart(productName, price) {
    const item = { productName, price };
    localStorage.setItem("cartItem", JSON.stringify(item));
    alert(productName + " added to cart!");
}

// Load order summary on payments page
function loadOrderSummary() {
    const item = JSON.parse(localStorage.getItem("cartItem"));

    if (item) {
        document.getElementById("summary-name").innerText = item.productName;
        document.getElementById("summary-price").innerText = "₹" + item.price;
    }
}

// Generate Order ID
function generateOrderId() {
    return "WPG-" + Math.floor(Math.random() * 900000 + 100000);
}

// Form submit → redirect to thankyou page
function submitOrder(event) {
    event.preventDefault();

    const orderId = generateOrderId();
    localStorage.setItem("orderId", orderId);

    window.location.href = "thankyou.html?orderId=" + orderId;
}

// Load order ID in thankyou page
function loadOrderId() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("orderId");

    if (orderId) {
        document.getElementById("order-id").innerText = orderId;
    }
}
