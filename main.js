function preload() {

}
function setup() {
    canvas=createCanvas(520,400);
    canvas.position(100,180);
    webcam=createCapture(VIDEO);
    webcam.hide();
}
function draw() {
    image(webcam,10,10,500,380);
    noFill()
    stroke('rgb(0,255,0)');
    strokeWeight(10);
    rect(10,10,500,380)
}
function take_snapshot() {
    save("Custom.png")
}