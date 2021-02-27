var canvas;
var music;
var smallbox;
var box1;
var box2;
var box3 ;
var box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    //smallbox
    smallbox = createSprite(random(20,750),100,40,40);
    smallbox.shapeColor = rgb(255,255,255);
    smallbox.velocityX = 4;
    smallbox.velocityY = 9; 

    //box1
    box1 = createSprite(0,580,360,30);
     box1.shapeColor = rgb(0,0,255);

    //box2
     box2 = createSprite(295,580,200,30);
     box2.shapeColor = rgb(255,128,0);

     //box3
     box3 = createSprite(515,580,150,30);
     box3.shapeColor = rgb(153,0,76);

     //box4
     box4 = createSprite(740,580,150,30);
     box4.shapeColor =  rgb(0,100,0);



    

}

function draw() {
    background(rgb(169,169,169));
     edges=createEdgeSprites();
     smallbox.bounceOff(edges);
    

    if ( smallbox.isTouching(box1) && smallbox.bounceOff(box1)){
        smallbox.shapeColor = rgb(0,0,255);
        music.play();
      }

    if ( smallbox.isTouching(box2) ){
        smallbox.shapeColor = rgb(255,128,0);
        smallbox.velocityX=0;
        smallbox.velocityY=0;
        music.stop();
    }

    if ( smallbox.isTouching(box3) && smallbox.bounceOff(box3)){
        smallbox.shapeColor = rgb(153,0,76);     
    }

    if ( smallbox.isTouching(box4) && smallbox.bounceOff(box4)){
        smallbox.shapeColor = rgb(0,100,0);
        
    }
    drawSprites();
}

