// Initializing an empty array to track counts for each random number
let randomCounts = [];
// Setting the total number of random numbers to pick to 20
let total = 20;

// setup() is executed once when the sketch starts to initialize everything and sets up the environment
function setup() {
    // Creating a canvas to draw on
    createCanvas(640, 240);

    // Initializing the randomCounts array with 0s (no number picked yet)
    // Loop through all 20 slots (from i=0 to i=19)
    for (let i= 0; i < total; i++) {
        // Set the count of each number to 0 initially
        randomCounts[i] = 0; 
    }
}

// draw() is executed continuously and updates the scene every frame
function draw() {
    // Setting the background colour to white
    background(255);
    // Picking a random index (between 0 and randomCounts.length - 1)
    // Generating a random index (0 to 19)
    let index = floor(random(randomCounts.length));
    // Increasing the count for the selected index by 1
    randomCounts[index]++;
    // Setting the outline colour for the bars (black)
    stroke(0);
    // Setting the fill color for the bars (gray)
    fill(127);

    // Calculating the width of each bar based on the canvas width (640px) and number of bars (20)
    let w = width / randomCounts.length;

    // Looping through all 20 elements in the randomCounts array
    for (let x = 0; x < randomCounts.length; x++) {
        // Drawing a rectangle (bar) for each count
        rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
}    