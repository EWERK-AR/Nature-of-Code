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
        // Noise offsets act like "pointers" along a smooth noise curve
        // Starting ty far from tx -> x and y steps move independently 
        // Noise offset for x step size
        this.tx = 0;
        // Noise offset for y step size
        this.ty = 10000;
    }
    //The show method displays the Walker on the screen
    show () {
        //Set the stroke color to black (for drawing the point)
        stroke(0) ;
        // Draw a point at the Walker´s position
        point(this.x, this.y);
    }
    // The step method moves the Walker: direction is random, but step size is controlled smoothly by Perlin noise
    step() {
        // Generating smooth step sizes from noise (0 to 4 pixels)

        // noise(this.tx) returns smooth value (0–1), then map() turns it into a step size (0–4 pixels)
        let xstep = map(noise(this.tx), 0, 1, 0, 4); // map(value to map, current min and max range, desired min and max range)
        let ystep = map(noise(this.ty), 0, 1, 0, 4);

        // Randomly deciding if step should be negative or positive
        // random(1) gives a decimal number between 0 and 1, there’s a 50% chance it’s less than 0.5
        // If it is, multiply xstep by -1 -> flips it to negative; if not, leave it positive
        if (random(1) < 0.5) xstep *= -1;
        if (random(1) < 0.5) ystep *= -1;

        // Based on the random number, decide the direction to move
        this.x += xstep; //+= Take the current value of this.x and add xstep to it: this.x = this.x + xstep (longer version)
        this.y += ystep;

        // Moving forward in noise space -> next frame gives a slightly different value -> step size changes smoothly over time
        this.tx += 0.01;
        this.ty += 0.01;
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