leftShoulderX= 0;
leftShoulderY= 0;

function preload() {
necklace= loadImage("necklace.png");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("left shoulder x=" + results[0].pose.leftShoulder.x);
        console.log("left shoulder y=" + results[0].pose.leftShoulder.y);
        leftShoulderX= results[0].pose.leftShoulder.x-180;
        leftShoulderY= results[0].pose.leftShoulder.y-55;
    }
}

function draw() {
    image(video, 0, 0, 500, 500);
    image(necklace, leftShoulderX,leftShoulderY,200,175);
}

function takeSnapshot() {
    save("Captured_Image.png");
}