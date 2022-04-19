
let time = 0;
let waveHeight = 100;
let lineDistance = 5;
let speed = 1/250;
let totalWidth = 300;
let totalHeight = 400;

function gauss(x) {
  return waveHeight * exp(-pow((x - width/2) / 50, 4))
}

// the dome looks better than the gauss cap
function dome(x) {
  return waveHeight / (1 + pow(x - width/2, 4) / 8e6)
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  frameRate(60);
}

function draw() {
  // clear the background
  background(0);
  
  // update the time
  time += speed;
  
  // set the fill color to black and the stroke to white
  fill(0);
  stroke(255);
  
  // start drawing the individual waves from top to bottom
  for (y = height/2 - totalHeight/2; y < height/2 + totalHeight/2; y += lineDistance) {
    
    beginShape();
    
    for (x = width/2 - totalWidth/2; x < width/2 + totalWidth/2; x += 1) {
      vertex(
        x,
        // apply some noise to the dome
        y - dome(x) * noise(x / 30 + time + y)
      );
    }
    
    endShape();
  }
}
