// In this sketch the walker can only step in 4 directions

// The "Walker" class defines a moving point on the canvas
// It has properties (position) and behaviors (displaying itself)
// Class = Recipe
class Walker {
    // Constructor sets the initial position of the Walker
    constructor() {
        /* Old code with scalar values
        this.x = width / 2;
        this.y = height / 2;
        */

        // Create a vector for the walker's position, starting at the canvas center
        // Using a vector means x and y are grouped together in one object instead of separate numbers (this.x and this.y)
        this.position = createVector(width / 2, height / 2);
    }
    //The show method displays the Walker on the screen
    show () {
        //Set the stroke color to black (for drawing the point)
        stroke(0) ;

        /* Old code with scalar values
        point(this.x, this.y); */

        // Draw a point at the current position, accessing the x and y components of the vector with dot (.) notation
        point(this.position.x, this.position.y);
    }
    // The step method makes the Walker take a step in a random direction
    step() {
        // Create a vector to represent a single step in this frame; starts at (0,0) -> no movement yet
        let step = createVector(0,0);
        // Generate random number between 0 and 3 (changing variable, not const), round it down to the nearest whole number
        let choice = floor(random(4));

        /* Old code with scalar values
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
            this.y--; */

        // Decide which direction to move and set the step vector accordingly    
        if (choice === 0) step.x = 1; // move right
        else if (choice === 1) step.x = -1 // move left
        else if (choice === 2) step.y = 1 // move down
        else if (choice === 3) step.y = -1 //move up

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