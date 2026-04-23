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

    // Create a vector for the mouse position
    let mouse = createVector(mouseX, mouseY);

    // Find direction to mouse: Direction = mouse - position
    let dir = p5.Vector.sub(mouse, this.position);

    // Measure distance: How far away is the mouse?
    let distance = dir.mag();

    // Normalize direction (length becomes 1)
    dir.normalize();

    // Scale strength based on distance: Far away = strong pull; Close = weak pull
    let strength = distance * 0.01;

    // Apply strength to direction
    dir.mult(strength);

    // Set acceleration
    this.acceleration = dir;

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
