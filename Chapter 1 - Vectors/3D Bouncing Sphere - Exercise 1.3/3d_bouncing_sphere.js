let position; // Vector for the sphere's position
let velocity; // Vector for the sphere's velocity
let radius = 20; // Radius of the sphere
let boxSize = 200; // Half-size of the cube (cube will go from -boxSize to boxSize)

function setup() {
    createCanvas (600, 600, WEBGL); // Enable 3D rendering

    position = createVector(0, 0, 0); // Create a position vector at the center

    // Create a velocity vector with random components in x, y, z; it controls the speed and direction of the sphere
    velocity = createVector(random(-3, 3), random(-3, 3), random(-3, 3)); 
}

function draw() {
    background(200); // Light gray background

    //Draw a cube to visualize boundaries
    push(); // Save the current drawing state -> changes only for this object without affecting others
    noFill(); // Don´t fill the inside of shapes of the cube -> only edges should be visible
    stroke(0); // Set colour of the edges (lines) to black
    box(boxSize * 2); // The cube boundaries
    pop(); // Restore previous drawing state so these styles don't affect the sphere

    // Move the sphere by adding velocity to position (vector addition)
    position.add(velocity);

    // Check for collisions with each wall of the box -> If the sphere hits a wall, reverse its velocity in that direction
    if (position.x + radius > boxSize || position.x - radius < -boxSize) {
        velocity.x *= -1; // Bounce off left or right wall
    }
    if (position.y + radius > boxSize || position.y - radius < -boxSize) {
        velocity.y *= -1; // Bounce off top or bottom wall
    }
    if (position.z + radius > boxSize || position.z - radius < -boxSize) {
        velocity.z *= -1; // Bounce off front or back wall
    }

    // Draw the sphere at its current position
    push(); // Save the current drawing state -> changes only for this object without affecting others
    translate(position.x, position.y, position.z); // Move to the sphere's position
    fill(150, 0, 200); // Purple colour
    noStroke(); // Sphere has no outline (different from the cube)
    sphere(radius); // Draw sphere
    pop(); // Restore drawing state back to before push() -> settings for the box or other objects are unaffected
}