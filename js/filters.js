var cnv = document.getElementById("canv");
var ctx = cnv.getContext("2d");
var image = null;
var vcenter = cnv.width/2
var hcenter = cnv.height/2


function fupload(){
  var upload = document.getElementById("finput");
  //var output = document.getElementById("dimensions");
  image = new SimpleImage(upload);
  image.drawTo(cnv);
}

function makeGray(){
  isImage();
  var grayImg = new SimpleImage(image);
  clearCanvas();
  for(var pixel of grayImg.values()){
    var newColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(newColor);
    pixel.setGreen(newColor);
    pixel.setBlue(newColor);
  }
  grayImg.drawTo(cnv);
}

function makeDull(){
  isImage();
  var dullImg = new SimpleImage(image);
  clearCanvas();
    for(var pixel of dullImg.values()){
        pixel.setRed(pixel.getRed()/2);
        pixel.setGreen(pixel.getGreen()/2);
        pixel.setBlue(pixel.getBlue()/2);
     }
    dullImg.drawTo(cnv);
}

function scramble(){
  isImage();
  var scramImg = new SimpleImage(image);
  clearCanvas();
    for(var pixel of scramImg.values()){
        pixel.setRed(getRndInteger(0,255));
        pixel.setGreen(getRndInteger(0,255));
        pixel.setBlue(getRndInteger(0,255));
     }
    scramImg.drawTo(cnv);
}

function rainbow(){
  isImage();
  var rainbowImg = new SimpleImage(image);
  clearCanvas();
  var stripe = rainbowImg.getHeight()/7;
  for(var pixel of rainbowImg.values()){
   var avg = (pixel.getRed() + pixel.getGreen() +   pixel.getBlue())/3;
    //RED:
    if(pixel.getY() <= stripe){    
      if(avg < 128){
        pixel.setRed(avg*2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(avg*2 -255);
        pixel.setBlue(avg*2-255);
      }
     }
    //ORANGE:
    if(pixel.getY() > stripe){
      if(avg < 128){
        pixel.setRed(avg*2);
        pixel.setGreen(avg*.8);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(avg*1.2-51);
        pixel.setBlue(avg*2-255);
      }       
     }
    //YELLOW:
    if(pixel.getY() > stripe * 2){
      if(avg < 128){
        pixel.setRed(avg*2);
        pixel.setGreen(avg*2);
        pixel.setBlue(0);
      }else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(avg*2-255);
      }       
     }
    //GREEN:
    if(pixel.getY() > stripe * 3){
      if(avg < 128){
        pixel.setRed(0);
        pixel.setGreen(avg*2);
        pixel.setBlue(0);
      }else{
        pixel.setRed(avg*2-255);
        pixel.setGreen(255);
        pixel.setBlue(avg*2-255);
      }       
     }
    //BLUE:
    if(pixel.getY() > stripe * 4){
      if(avg < 128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(avg*2);
      }else{
        pixel.setRed(avg*2-255);
        pixel.setGreen(avg*2-255);
        pixel.setBlue(255);
      }       
     }
    //INDIGO:
    if(pixel.getY() > stripe * 5){
      if(avg < 128){
        pixel.setRed(avg*.8);
        pixel.setGreen(0);
        pixel.setBlue(avg*2);
      }else{
        pixel.setRed(avg*1.2-51);
        pixel.setGreen(avg*2-255);
        pixel.setBlue(255);
      }       
     }
    //VIOLET:
    if(pixel.getY() > stripe * 6){
      if(avg < 128){
        pixel.setRed(avg*1.6);
        pixel.setGreen(0);
        pixel.setBlue(avg*1.6);
      }else{
        pixel.setRed(avg*.4+153);
        pixel.setGreen(avg*2-255);
        pixel.setBlue(avg*.4+153);
      }       
     }
   }
   rainbowImg.drawTo(cnv);
}

function blueShift(){
  isImage();
  var blueshiftImg = new SimpleImage(image);
  clearCanvas();
  for(var pixel of blueshiftImg.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if(avg < 128){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(avg * 2);
    }else{
      pixel.setRed(avg*2-255);
      pixel.setGreen(avg*2 -255);
      pixel.setBlue(255);
    }
  }
  blueshiftImg.drawTo(cnv);
}

function twobit(){
  isImage();
  var twobitImg = new SimpleImage(image);
  clearCanvas();
    for(var pixel of twobitImg.values()){
      if(pixel.getRed() + pixel.getGreen() + pixel.getBlue() > 382){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(255);
      }else{
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
    }
  twobitImg.drawTo(cnv);
}

function obey(){
  makeGray();
  ctx.fillStyle = "black";
  ctx.font = "48px Verdana";
  ctx.textAlign = "center";
  ctx.fillText("OBEY", image.getWidth()/2, image.getHeight()/2);
}

function reset(){
  image.drawTo(cnv);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function clearCanvas(){  
  ctx.clearRect(0, 0, cnv.width, cnv.height);
}

function isImage(){
  if(image == null || !image.complete()){
    alert("oops");
    return false;
  }
}

