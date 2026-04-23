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

        // Time variables for perlin noise
        this.tx = 0;
        this.ty = 10000; // different starting point for y
    }
    update() {
    // Perlin noise to calculate smooth acceleration
        // noise() gives values between 0 and 1 -> map() converts that into -1 to 1 (so we can move in all directions)
    let ax = map(noise(this.tx),0 , 1, -1, 1);
    let ay= map(noise(this.ty),0, 1, -1, 1);

    // Create acceleration vector from noise
    this.acceleration = createVector(ax, ay);

    // Control strength of acceleration
    this.acceleration.mult(0.5);

    // Move forward in "time" -> changes the noise smoothly
    this.tx += 0.01;
    this.ty += 0.01;

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
