// Slider to control the spread of the paint splatter
let sdSlider;

// setup() is executed once when the sketch starts to initialize everything and sets up the environment
function setup() { 
    // Creating a canvas to draw on
  createCanvas(640, 240);
  // Setting the background colour to white
  background(255);
  // This creates a slider UI element that the user can drag
  // The value of this slider determines the standard deviation (spread) of the Gaussian distribution
  // Low values = tight cluster of paint dots, high values = wider splatter
  sdSlider = createSlider(1, 100, 30); // min 1, max 100, starting value 30
  sdSlider.position(10, 10); // placing the slider near the top-left corner
}
// draw() is executed continuously and updates the scene every frame
function draw() {
    // Get current spread value from slider
    // The standard deviation controls how far from the center the dots can appear
  let sd = sdSlider.value();

  // Generating horizontal position using a Gaussian distribution
  // Most dots will cluster around the canvas center (width / 2), with some outliers creating a natural splatter effect
  let x = randomGaussian(width / 2, sd); 
  // Generating vertical position using Gaussian distribution with smaller spread (sd / 2) so the paint looks more like it splatters outward horizontally
  let y = randomGaussian(height / 2, sd / 2);

  // Generating colour components using Gaussian distribution
  // Values are mostly around the base colours but vary naturally to simulate real paint variations
  let r = randomGaussian(200, 50); // mostly light red
  let g = randomGaussian(100, 50); // mostly light green
  let b = randomGaussian(50, 50);  // mostly darker blue

  // Ensuring color values stay within valid range (0-255)
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  // Remove outline from the shapes
  noStroke();
  // Setting fill color with transparency so overlapping dots show density
  fill(r, g, b, 150);
  // Drawing a circle at (x, y) with diameter 16 pixels to simulate a paint drop
  circle(x, y, 16);
}