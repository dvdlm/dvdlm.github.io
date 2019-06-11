var x,y;
var theta=0;
var r1=59;
var rate = 0.1;

function setup() {
var cnv = createCanvas(windowWidth, windowHeight);
background(69);
stroke(200);
noCursor();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(69);
	line(0,mouseY,windowWidth,mouseY);
	line(mouseX,0,mouseX,windowHeight);
	x = mouseX + r1*Math.sin(theta);
	y = mouseY + r1*-Math.cos(theta);
	ellipse(x,y,20,20); fill(69)
	theta = (theta + rate*(abs(sin(theta))+0.1) )% (2*3.14);
}