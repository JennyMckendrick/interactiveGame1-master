var widthRect = 50;
var heightRect = 50;



function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220);

}

function draw() {

}


function mousePressed(){

    if(mouseButton == LEFT){
        fill(255, 255, 255);
        rectMode(CENTER);
        rect(mouseX, mouseY, widthRect, heightRect);
     
    }


    if(mouseButton == RIGHT){
        fill(255, 255, 255);
        ellipseMode(CENTER);
        ellipse(mouseX, mouseY, widthRect, heightRect);
     
    }


}

function keyPressed(){
    if(keyCode == ENTER){
        background(0);
    }


    if(keyCode == UP_ARROW){
        fill(225)
        triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+25, mouseY-50);

    }


    if(keyCode == DOWN_ARROW){
        fill(100)
        ellipseMode(CENTER);
        ellipse(mouseX, mouseY, widthRect, heightRect);

    }

    if(keyCode == LEFT_ARROW){
        fill(random(0,225))
        rect(mouseX, mouseY, widthRect, heightRect);


    }

    if(keyCode == RIGHT_ARROW){
        fill(random(0,225),  random(0,225), random(0,225));
        triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+25, mouseY-50);


    }




}