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
	x+=(mouseX-x)*0.03;
	y+=(mouseY-y)*0.03;
	rotateX(-(y)/1000);
  	rotateY((x)/1000);
	//z++;
	//rotateZ(z/3500);
	z+=(sqrt(mouseX^2-mouseY^2)-z)*0.1;
	rotateZ(z/2000);
    box(windowHeight/3);
}
