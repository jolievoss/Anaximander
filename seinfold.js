// *
//  * Load and Display an OBJ Shape. 
//  * 
//  * The loadShape() command is used to read simple SVG (Scalable Vector Graphics)
//  * files and OBJ (Object) files into a Processing sketch. This example loads an
//  * OBJ file of a rocket and displays it to the screen. 
 

let rocket;
let img;

let ry = 0, rx = 0, rz = 0;
let xLoc, yLoc, zLoc, count = 1, maxCount = 500, cashCount = 0, cashBump = 0;
let spin = true;

function preload() {
  rocket = loadModel("assets/seinfold/mesh.obj",true);
  img = loadImage("assets/seinfold/Elizabeth.png");
}
  
function setup() {
  let w = $("#middle").css("width");
  w = parseInt(w.slice(0,w.length-2))-50;
  canvas = createCanvas(w,w*.75, WEBGL);
  canvas.parent('middle');
  frameRate(25);
  
  xLoc = 0; //width/2;
  yLoc = 0; //height/2;
  zLoc = 0;
  
  
  // rocket.scale(30);
  // rocket.rotateX(PI/2 + 0.2);
  // rocket.rotateZ(PI/2);
  // rocket.translate(-2, 0, -4);
  
  
  
  // let font = loadFont("assets/seinfold/SourceCodePro-Regular.ttf", 64);
  // textFont(font);
}

function windowResized() {

  let w = $("#middle").css("width");
  w = parseInt(w.slice(0,w.length-2))-50;
  resizeCanvas(w,w*.75);
}

function draw() {
  background(0);
  // lights();
  
  translate(xLoc, yLoc, zLoc);
  rotateZ(rz);
  rotateY(ry);
  rotateX(rx);
  model(rocket);
  
  if (spin) {
  
    if (count%1 == 0) {
      ry += 0.015;
    }
    
    //stunt 1
    
    if (count > 100 && count < 225){
      rz -= count%2*0.01;
    }
    
    if (count > 100 && count < 225){
      rz += (count+1)%2*0.01;
    }
    
    //stunt 2
    
    if (count > 150 && count < 225){
      yLoc -= count%2*3;
    }
    
    if (count > 150 && count < 225){
      yLoc += (count+1)%2*3;
    }
    
    //stunt 3
    
    if (count > 201 && count < 225){
      ry -= 1;
    }
    
    //
    
    count += 1;
    
    if(count == maxCount){
      count = 1;
    } 
  }

  
  //cash counter
  
  // text("$" + cashCount, -200, -100 + cashBump);
  // text("$" + cashCount, 100, +200 + cashBump);
}

// function keyPressed(){
  
//   if(keyCode==32){
//     if(spin){
//       spin = false;
//     }
  
//     else if(!spin){
//       spin = true;
//     }
//   }
  
//   if(keyCode==37){
//     cashCount -= 1;
//     cashBump = 5;    
//   }
  
//   if(keyCode==39){
//     cashCount += 1;
//     cashBump = -5;
//   }
// }

// function keyReleased(){
  
//   if(keyCode==37){
//     cashBump = 0;    
//   }
  
//   if(keyCode==39){
//     cashBump = 0;
//   }
// }