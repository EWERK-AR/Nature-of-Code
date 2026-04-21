// In this sketch the walker can only step in 4 directions

// The "Walker" class defines a moving point on the canvas
// It has properties (position) and behaviors (displaying itself)
// Class = Recipe
class Walker {
    // Constructor sets the initial position of the Walker
    constructor() {
        // Starting at the center of the canvas horizontally
        this.x = width / 2;
        // Starting at the center of the canvas vertically
        this.y = height / 2;
    }
    //The show method displays the Walker on the screen
    show () {
        //Set the stroke color to black (for drawing the point)
        stroke(0) ;
        // Draw a point at the Walker´s position
        point(this.x, this.y);
    }
    // The step method makes the Walker take a step in a random direction (including diagonals)
    step() {
        // Generate a random floating-point step between -1 and 1 for smooth, continuous movement
        let xstep = random(-1, 1);
        let ystep = random(-1, 1);
        
        // random(1) = picks a number between 0 and 1, this "if" statement is just for the probability (like flipping a coin)
        // > 0.5 is true about 50% of the time
        if (random(0, 1) > 0.5) {
            // Biased x movement towards the mouse, if the mouse is to the right and the walker is moving left → reduced step
            // && = "and" → both conditions must be true
            if (mouseX > this.x && xstep < 0) {
                xstep *= 0.2;
            }
            // If the mouse is to the left (mouseX < this.x) and the walker is moving right (xstep > 0) → reduced step
            if (mouseX < this.x && xstep > 0) {
                // → reduced step = multiply the current value by 0.2, this makes the movement much smaller
                xstep *= 0.2;
            }
            
            // Biased y movement towards the mouse
            // If the mouse is below (mouseY > this.y) and the walker is moving up (ystep < 0)
            if (mouseY > this.y && ystep < 0) {
                // → reduced step = multiply the current value by 0.2, this makes the movement much smaller
                ystep *= 0.2;
            }
            // If the mouse is above and the walker is moving down → reduced step
            if (mouseY < this.y && ystep > 0) {
                ystep *= 0.2;
            }
        }
        // Based on the random number, decide the direction to move (9 possibilities)
        this.x += xstep; //+= Take the current value of this.x and add xstep to it: this.x = this.x + xstep (longer version)
        this.y += ystep;
    }
}

// Declaring a global variable to hold the Walker object
let walker; 

// setup() is executed once when the sketch starts to initialize everything and set up the environment
function setup() {
    // Creating a canvas to draw on
    createCanvas(640, 240);
    // Creating a new Walker object and store it in the 'walker' variable
    walker = new Walker();
    // Setting the background colour to white
    background(255);
}

// draw() is executed continuously and updates the scene every frame
function draw() {
    // Making the walker take a random step
    walker.step();
    // Drawing the walker at its current position
    walker.show();
}