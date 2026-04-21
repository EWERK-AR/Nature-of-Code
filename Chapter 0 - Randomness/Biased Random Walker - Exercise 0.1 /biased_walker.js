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
    // This step method makes the Walker take a step in a biased direction while keeping the 9 possible outcomes (including diagonals)
    step() {
        
        // The random function generates values between -1 and 1, allowing for movement in all 9 directions
        // -1 (left), 0 (no horizontal movement), or 1 (right)
        let xstep = random(-1, 1);
        // -1 (up), 0 (no vertical movement), or 1 (down)
        let ystep = random(-1, 1);
        // Bias the movement towards right and down with a 30% chance of restriction of moving left or up
        // If the random value is greater than 0.7, the walker will not move left or up
        if (random(0, 1) > 0.7) {
            // No left movement
            if (xstep < 0) xstep = 0;
            // No up movement
            if (ystep < 0) ystep = 0;
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