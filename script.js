var z = 0;
var x = 0, y = 0;
var bgcol = 225

function setup() {
var cnv = createCanvas(windowWidth, windowHeight,WEBGL);
stroke(50);
noFill();
smooth();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	bgcol += (225 - bgcol)*0.05;
	background(bgcol);
	x+=(mouseX-x)*0.03;
	y+=(mouseY-y)*0.03;
	rotateX(-(y)/1000);
  	rotateY((x)/1000);
	z++;
	rotateZ(z/3500);
    box(windowHeight/3);
}

function mouseClicked() {
	bgcol = 255;
}
