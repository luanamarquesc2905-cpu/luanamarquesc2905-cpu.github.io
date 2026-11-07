 let ball;

let x = 0;
let y = 0;
       
        function setup() {
            createCanvas(windowWidth, windowHeight);
        }
        function draw() {
          background(40, 40, 40);
            strokeWeight(0);
            if(mouseX< windowWidth/2){
              fill(140,140,250);
              if (mouseY> windowHeight/2) {
                fill(0,5,60);}
            }else {
              fill(80,10,170);
              if (mouseY> windowHeight/2 && mouseX> windowWidth/2) {
                fill(0,5,60);
              }
            }
            rect(0,0,windowWidth,windowHeight/2);
           x += (mouseX - x) * 1;
           y += (mouseY - y) * 1;
            if (mouseX < windowWidth/2) {
              fill(240,180,60);
            }else {
              fill(200, 200, 240);
            }
            ellipse(x, y, 100, 100);
          stroke(0);
            strokeWeight(0);
            if(mouseX< windowWidth/2 && mouseY< windowHeight/2){
            fill(20,150,70);
            }else {
              fill(0,100,80)}
            rect(0,windowHeight/2,windowWidth,windowHeight);
        }
       