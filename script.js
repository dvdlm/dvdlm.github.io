function setup() {
var cnv = createCanvas(windowWidth, windowHeight,WEBGL);
stroke(200);
noFill();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(69);
	rotateX(-(mouseY-height/2)/1000);
    rotateY((mouseX-width/2)/1000);
    box(windowHeight/3);
}
