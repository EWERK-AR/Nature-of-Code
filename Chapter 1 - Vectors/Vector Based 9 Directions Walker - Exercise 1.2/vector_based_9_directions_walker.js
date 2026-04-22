// In this sketch the walker can step in 9 directions

// The "Walker" class defines a moving point on the canvas
// It has properties (position) and behaviors (displaying itself)
// Class = Recipe
class Walker {
    // Constructor sets the initial position of the Walker
    constructor() {
        // Create a vector for the walker's position, starting at the canvas center
        this.position = createVector(width / 2, height / 2);
    }
    //The show method displays the Walker on the screen
    show () {
        //Set the stroke color to black (for drawing the point)
        stroke(0) ;
        // Draw a point at the current position, accessing the x and y components of the vector
        point(this.position.x, this.position.y);
    }
    // The step method makes the Walker take a step in a random direction (including diagonals)
    step() {
        // Generate a random floating-point step vector between -1 and 1 for smooth, continuous movement
        let step = createVector(random(-1, 1), random(-1, 1));
        // Add the step vector to the position vector
        this.position.add(step);
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
    // Setting the background color to white
    background(255);
}

// draw() is executed continuously and updates the scene every frame
function draw() {
    // Making the walker take a random step
    walker.step();
    // Drawing the walker at its current position
    walker.show();
}