nosex=0;
nosey=0;
function preload(){
    lip = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
 canvas = createCanvas(300, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on("pose",gotResult);
}

function gotResult(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x-190;
        nosey=results[0].pose.nose.y-85;
        console.log("nose x = "+nosex +" , nose y = "+nosey);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(lip, nosex, nosey, 40, 25);
}

function modelLoaded(){
    console.log("PoseNet is loaded");
}



function take_snapshot(){
    save('myFilterImage.png');
}