var quotes = [
    "Be yourself; everyone else is already taken.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "“So many books, so little time.”",
    "A room without books is like a body without a soul.",
    "You only live once, but if you do it right, once is enough.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

var currentIndex = 0;

function showNextQuote() {
    var quoteDisplay = document.getElementById("quote-display");

    // Display the current quote
    quoteDisplay.textContent = quotes[currentIndex];

    // Check if we're at the last quote
    if (currentIndex === quotes.length - 1) {
        currentIndex = 0; // Reset to the first quote
    } else {
        currentIndex++; // Move to the next quote
    }
}
