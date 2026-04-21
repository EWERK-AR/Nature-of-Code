// In this sketch the walker can step in 9 directions

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
        // Gaussian step size: mean = 0 (centered), Standard Deviation (SD) = 1 (controls step size)
        // Still allowing all 9 directions: Up-Left, Up, Up-Right, Left, Stay, Right, Down-Left, Down, Down-Right
        let xstep = randomGaussian(0, 1); // Horizontal step
        let ystep = randomGaussian(0, 1); // Vertical step
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