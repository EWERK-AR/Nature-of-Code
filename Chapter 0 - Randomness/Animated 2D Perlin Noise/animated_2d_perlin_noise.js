// Declaring variables for the sliders that will control the Perlin noise behaviour
let xSlider, ySlider, colourSlider;

// New variable for animating the noise
let zoff = 0;

//// setup() is executed once when the sketch starts to initialize everything and set up the environment
function setup() {
    // Create a 400x400 canvas
    createCanvas(400, 400);
    
    // Set pixel density to 1 to directly manipulate pixel data
    pixelDensity(1);
    
    // Create sliders for controlling the xoff and yoff increments
    // values in createSlider(min value of slider, max value of slider, default value when slider first displayed, dragging slider step size) 
    xSlider = createSlider(0.001, 0.05, 0.01, 0.001); // xoff increment slider (range: 0.001 to 0.05)
    ySlider = createSlider(0.001, 0.05, 0.01, 0.001); // yoff increment slider (range: 0.001 to 0.05)
    colourSlider = createSlider(0, 255, 255, 1); // Colour intensity slider (range: 0 to 255)
    
    // Position sliders below the canvas
    xSlider.position(10, height + 10);
    ySlider.position(10, height + 40);
    colourSlider.position(10, height + 70);
    
    // Setting the background colour to white
    background(255);
}
// draw() is executed continuously to update the scene based on the sliders' changes
function draw() {
    // Load pixel data into an array for manipulation
    loadPixels();
    
    // Initialize xoff and yoff at 0 to start noise sampling
    let xoff = 0;
    
    // Loop through all the pixels horizontally
    for (let x = 0; x < width; x++) {
        let yoff = 0;  // Start yoff at 0 for each new column
        
        // Loop through all the pixels vertically
        for (let y = 0; y < height; y++) {
            // Get the Perlin noise value for the current xoff, yoff and zoff
            let n = noise(xoff, yoff, zoff);  // Using zoff to animate
            
            // Map the noise value (0-1) to a colour range (using colourSlider for intensity)
            let r = map(n, 0, 1, 0, colourSlider.value()); // Red channel
            let g = map(n, 0, 1, 0, colourSlider.value()); // Green channel
            let b = map(n, 0, 1, 0, colourSlider.value()); // Blue channel

            // Calculate the pixel index in the pixel array
            let index = (x + y * width) * 4;
            
            // Set the pixel colour at the calculated index
            pixels[index] = r;     // Red
            pixels[index + 1] = g; // Green
            pixels[index + 2] = b; // Blue
            pixels[index + 3] = 255; // Alpha (fully opaque)
            
            // Increment yoff for the next row of pixels (controlled by ySlider)
            yoff += ySlider.value();
        }

        // Increment xoff for the next column of pixels (controlled by xSlider)
        xoff += xSlider.value();
    }
    
    // Update the canvas with the new pixel data
    updatePixels();

    // Incrementing zoff to animate the noise and adjusting the increment to control the speed of animation
    zoff += 0.01;
}