//Create variables here
var dogImg,happydogImg;
var dog,happydog;
var foodS,foodStock;
var database;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happydogImg=loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,40,40);
  dog.addImage(dogImg)
  dog.scale=0.2
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  
 background(46,139,87)
 
  //add styles here


  
   if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happydogImg);


   }

   drawSprites();
  textSize(20)
  fill("black")
   text("FoodStock:"+foodS,200,150)

  }


   function readStock(data){

    foodS=data.val();

   }

   function writeStock(x){

    if(x<=0){
      x=0;
    }
    else{
      x=x-1;
    }
    
    database.ref('/').update({
      Food:x
    })
    
   }






