function preload(){
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('poseNet is loaded');
}
function draw(){
    image(clown_nose,noseX,noseY,30,30);
    image(video,0,0,300,300);
}

image(clown_nose,noseX,noseY,30,30);

function take_snapshot(){
save("clown nose image.jpg");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y-15;
console.log("noseX="+noseX);
console.log("noseY="+noseY);
}
}
