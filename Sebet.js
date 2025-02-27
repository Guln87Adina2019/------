document.addEventListener("DOMContentLoaded", function () {
    // Барлық "В корзину" батырмаларын табу
    const cartButtons = document.querySelectorAll("button");

    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Себет бетіне өту
            window.location.href = "cart.html";
        });
    });
});


