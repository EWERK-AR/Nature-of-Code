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
    Exercise 1.7: Translate the following pseudocode to code, using static or nonstatic functions where appropriate:

    The vector v equals (1, 5).
    The vector u equals v multiplied by 2.
    The vector w equals v minus u.
    Divide the vector w by 3.

    Solution:

    let v = createVector.v(1, 5);
    let u = p5Vector.mult(v, 2);
    let w = p5Vector.sub(v, u);
    w.div(3);

    `;

    // Display the full explanation text on the canvas, starting from position (20, 40)
    text(explanation, 20, 40, width - 40, height - 40); // Add word wrapping within the canvas area
}