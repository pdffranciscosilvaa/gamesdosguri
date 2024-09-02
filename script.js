document.addEventListener("DOMContentLoaded", function() {
    const cartCountElement = document.getElementById("cart-count");
    let cartCount = 0;

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });
});


function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    if (menuLinks.style.display === 'block') {
        menuLinks.style.display = 'none';
    } else {
        menuLinks.style.display = 'block';
    }
}
