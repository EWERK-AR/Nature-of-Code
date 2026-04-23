class Mover {
    constructor() {
        // Start in the middle of the screen
        this.position = createVector(width / 2, height / 2);
        // Start with no movement
        this.velocity = createVector(0, 0);
        // Start with no acceleration
        this.acceleration = createVector(0, 0);
        // Limit how fast the vehicle can go
        this.topSpeed = 5;
    }
    update() {
    // Reset acceleration every frame
    this.acceleration.set (0, 0);
    // Accelerate forward (right side) if Up Arrow pressed
    if (keyIsDown(UP_ARROW)) {
        // Add a small force to the right
        this.acceleration.x = 0.2;
    }
    // Brake, if Down Arrow pressed
    if (keyIsDown(DOWN_ARROW)) {
        // Reduce overall velocity (multiply by a number smaller than 1)
        this.velocity.mult (0.9);
    }
    // Add acceleration to velocity (speed changes)
    this.velocity.add(this.acceleration);

    // Limit maximum speed
    this.velocity.limit(this.topSpeed);

    // Move the object by adding velocity to position
    this.position.add(this.velocity);
    }

    show() {
    // Draw the vehicle as a circle
    fill(50, 100, 200);
    noStroke();
    circle(this.position.x, this.position.y, 40);
    }

}
// This will store the vehicle object
let mover;

function setup() {
    createCanvas(600, 400);
    // Create the vehicle
    mover = new Mover();
}

function draw() {
    background(220);
    // Update the physical movement
    mover.update();
    // Draw the vehicle 
    mover.show ();
}
