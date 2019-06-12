var z = 0;
var x = 0, y = 0;
let dx,dy;

function setup() {
var cnv = createCanvas(windowWidth, windowHeight,WEBGL);
stroke(200);
noFill();
smooth();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(69);
	dx=(mouseX-x)*0.03;
	dy=(mouseY-y)*0.03;
	rotateX(-(dy-height/2)/1000);
  	rotateY((dx-width/2)/1000);
	z++;
	rotateZ(z/3500);
    box(windowHeight/3);
}
