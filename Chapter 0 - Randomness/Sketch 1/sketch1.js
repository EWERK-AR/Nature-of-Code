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
    // The step method makes the Walker take a step in a random direction
    step() {
        // Generate random number between 0 and 3 (changing variable, not const), round it down to the nearest whole number
        let choice = floor(random(4));
        // Based on the random number, decide the direction to move. Boolean operator tests both value and type equality
        // Move right
        if (choice === 0) {
            this.x++;
        }
        // Move left
        else if (choice === 1) {
            this.x--;
        }
        // Move up
        else if (choice === 2) {
            this.y++;
        }
        //Move down
        else if (choice === 3) {
            this.y--;
        }
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