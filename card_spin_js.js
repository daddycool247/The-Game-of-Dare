document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const spinButton = document.getElementById("spinButton");
    const resultDisplay = document.getElementById("result");

    // Attach a "back" face to each card
    cards.forEach(card => {
        const back = document.createElement("div");
        back.className = "back";
        back.textContent = "🎉"; // Replace with image or icon
        card.appendChild(back);

        const front = document.createElement("div");
        front.className = "front";
        front.textContent = card.dataset.number;
        card.appendChild(front);
    });

    // Spin Button Event
    spinButton.addEventListener("click", () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        resultDisplay.textContent = `Result: ${randomNumber}`;
        flipCard(randomNumber);
    });

    // Flip Card
    function flipCard(number) {
        const card = document.querySelector(`.card[data-number="${number}"]`);
        if (card) card.classList.add("flip");
    }
});
