var hr, mn, sc;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  hr = hour();
  mn = minute();
  sc = second();
  
  hr = map(hr, 0, 24, 0, 360)
  mn = map(mn, 0, 60, 0, 360)
  sc = map(sc, 0, 60, 0, 360)
  
  angleMode(DEGREES)
 
  push()
  stroke(255, 0 , 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(hr)
  line(0, 0, 0, -50);
  pop()
  
  push()
  stroke(0, 255 , 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(mn)
  line(0, 0, 0, -75);
  pop()
  
  push()
  stroke(0, 0 , 255);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(sc)
  line(0, 0, 0, -100);
  pop()

 
}