function showCartMessage() {
  const message = document.getElementById("cart-message");
  message.style.display = "block";
  message.style.animation = "none"; // reset
  message.offsetHeight; // trigger reflow
  message.style.animation = "fadeInOut 2s ease";

  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
}
document.getElementById("checkout-button").addEventListener("click", function() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checkout.");
        return;
    }

    // Here you can implement your checkout logic.
    // For now, it will simply show a confirmation and clear the cart.
    if (confirm("Proceed to checkout?")) {
        alert("Thank you for your purchase!");
        cart.length = 0; // clear cart
        updateCartUI();
        toggleCart();
    }
});

function addToCart(productName, price, imgSrc) {
    cart.push({ name: productName, price, img: imgSrc });
    localStorage.setItem('cart', JSON.stringify(cart)); // save cart persistently
    updateCartUI();
    showCartMessage();
}


