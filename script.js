var z = 0;

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
	rotateX(-(mouseY-height/2)/1000);
    rotateY((mouseX-width/2)/1000);
	z++;
	rotateZ(z);
    box(windowHeight/3);
}
