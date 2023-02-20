let luz = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(mouseX < width / 2){
    background(255);
  }else{
    background(0);
  }
}

function mouseClicked() {
  luz = !luz;
}
