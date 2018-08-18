function setup() {
	createCanvas(1400, 800);
	background(0);

}

function draw() {

	stroke(200, 100, 100);
	noFill();
	ellipseMode(RADIUS);
	point(300, 300);

	arc(mouseX, mouseY, 5, 5, 0, PI);
	arc(mouseX + 5, mouseY, 10, 10, PI, TWO_PI);
	arc(mouseX - 5, mouseY, 20, 20, 0, PI);
	arc(mouseX + 15, mouseY, 40, 40, PI, TWO_PI + HALF_PI);

}

function mousePressed() {
	background(0);
}
