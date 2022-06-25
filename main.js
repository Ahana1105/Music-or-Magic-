song_1 = "";
song_2 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;



function preload() {
song1 = loadSound("Peter Pan.mp3");
song2 = loadSound("Harry Potter.mp3")
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X =" + leftWristX + "Left Wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X =" + rightWristX + "Right Wrist Y = " + rightWristY);

    }
}


function modelLoaded() {
    console.log("Posenet model is initialised");
}


function draw() {
    image(video, 0, 0, 600, 500);
}