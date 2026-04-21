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
        // Maximum possible step size
        let step = 4
        // Generating a random step size for x using accept-reject and scale accepted random number to max step
        let xstep = acceptreject() * step;
        // Randomly deciding if step should be negative or positive
        // random(1) gives a decimal number between 0 and 1, there’s a 50% chance it’s less than 0.5
        // If it is, multiply xstep by -1 → flips it to negative; if not, leave it positive
        if (random(1) < 0.5) xstep *= -1;

        // Generating a random step size for y using accept-reject and scale accepted random number to max step
        let ystep = acceptreject() * step;
        // Randomly deciding if step should be negative or positive
        if (random(1) < 0.5) ystep *= -1;

        // Based on the random number, decide the direction to move (9 possibilities)
        this.x += xstep; //+= Take the current value of this.x and add xstep to it: this.x = this.x + xstep (longer version)
        this.y += ystep;
    }
}

// Accept-reject function to create a custom probability distribution
// Higher numbers are more likely to be picked
function acceptreject() {
    // Doing this “forever” until it finds a qualifying random value
    while (true) {
        // Picking a random number value between 0 and 1
        let r1 = random(1);
        // Assigning the probability of accepting this number (r1^2 gives quadratic probability)
        let probability = r1 * r1;
        // Picking a second random number value between 0 and 1
        let r2 = random(1);
        // Accept r1 if r2 < probability
        if (r2 < probability) {
            return r1; // qualified number returned
        }
        // Otherwise, try again
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