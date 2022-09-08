objects = [];
status = "";
video = "";

function preload(){

}

function setup() {
    canvas = createCanvas(410, 350);
    canvas.center();
    video = createCapture(VIDEO);
  video.size(410, 350);
  video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
  
  function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }

function draw(){
    image(video, 0 ,0, 410, 350);
    if (status !="")
    {
     objectDetector.detect(video, gotResult);
     for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Object Detected";
        document.getElementById("status").innerHTML = "Number of objects detected are : " + objects.length;

        fill("#FF000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " "+ percent + "%", objects[i].x + 15, objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
     } 
     
    }
}