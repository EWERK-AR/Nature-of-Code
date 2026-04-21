/* Question: What is the probability of drawing two aces in a row from a deck of 52 cards, if you reshuffle your first draw back into the deck before making your second draw? What would that probability be if you didn’t reshuffle after your first draw?

Without reshuffle:
1st draw: 4 (Aces) / 52 (Deck) = 4/52 = 0.0077 = 7.7%
Since we don´t reshuffle, there will only remain 3 Aces out of the 4, and since we already took a card only 51 cards out of the 52 in the deck.
2nd draw: 3 (Aces) / 51 (Deck) = 3/51 = 0.0588 = 5.88%
Total chance: 4/52 x 3/51 = 12/2652 = 0.00045 = 0.45%

With reshuffle:
1st draw: 4 (Aces) / 52 (Deck) = 4/52 = 0.0077 = 7.7%
Reshuffling Ace back into the deck, therefore it will contain 4 Aces and 52 cards again.
2nd draw: 4 (Aces) / 52 (Deck) = 4/52 = 0.0077 = 7.7%
Total chance: 4/52 x 4/52 = 16/2704 = 0.0059 = 0.59% */

// This function runs once when the webpage is loaded
function setup() {
    // Creating a larger canvas to accommodate all the text (otherwise cut-off)
    createCanvas(800, 800); // Increase the canvas size to 800x800 pixels
    background(255); // Set the background colour to white (255 is white in RGB)

    // Setting the text size and colour
    textSize(14); // Set the text size to 14px (adjusted for readability)
    fill(0); // Set the text color to black (0 is black in RGB)

    // Define all of the explanation text (as a single string)
    let explanation = `
    Question: What is the probability of drawing two aces in a row from a deck of 52 cards, if you reshuffle your first draw back into the deck before making your second draw? What would that probability be if you didn’t reshuffle after your first draw?

    Without reshuffle:
    1st draw: 4 (Aces) / 52 (Deck) = 4/52 = 0.0077 = 7.7%
    Since we don’t reshuffle, there will only remain 3 Aces out of the 4, and since we already took a card, there are only 51 cards out of the 52 in the deck.
    2nd draw: 3 (Aces) / 51 (Deck) = 3/51 = 0.0588 = 5.88%
    Total chance: 4/52 x 3/51 = 12/2652 = 0.00045 = 0.45%

    With reshuffle:
    1st draw: 4 (Aces) / 52 (Deck) = 4/52 = 0.0077 = 7.7%
    Reshuffling Ace back into the deck, therefore it will contain 4 Aces and 52 cards again.
    2nd draw: 4 (Aces) / 52 (Deck) = 4/52 = 0.0077 = 7.7%
    Total chance: 4/52 x 4/52 = 16/2704 = 0.0059 = 0.59%
    `;

    // Display the full explanation text on the canvas, starting from position (20, 40)
    text(explanation, 20, 40, width - 40, height - 40); // Add word wrapping within the canvas area
}