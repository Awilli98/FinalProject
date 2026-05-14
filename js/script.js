const searchInput = document.getElementById("productSearch");
const productCards = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const searchText = searchInput.value.toLowerCase();

        productCards.forEach(function (card) {
            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";

        contactForm.reset();
    });
}