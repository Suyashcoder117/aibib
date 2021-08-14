noseX = 0;
noseY = 0;

function preload(){
clownKaNose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function capture(){
    save('ClownNose.png');
}