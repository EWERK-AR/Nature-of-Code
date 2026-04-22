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
    Question: Write the limit() function for the p5.Vector class:

    // limit(max) makes sure the vector does not get longer than 'max'
    limit(max) {
    
        // Check if the current length (magnitude) of the vector is greater than the maximum allowed value
        if (this.mag() > max) {

            // normalize() changes the vector so its length becomes 1, but keeps the same direction
            this.normalize();

            // mult(max) scales the vector up to the desired maximum length; since it was length 1 after normalize(), it now becomes 'max'
            this.mult(max);
        }
    }
    `;

    // Display the full explanation text on the canvas, starting from position (20, 40)
    text(explanation, 20, 40, width - 40, height - 40); // Add word wrapping within the canvas area
}