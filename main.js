canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
   tag_background_image=new Image();
   tag_background_image.onload=uploadBg;
   tag_background_image.src=background_image;

   tag_rover_image=new Image();
   tag_rover_image.onload=uploadRover;
   tag_rover_image.src=rover_image;
}
function uploadBg(){
    ctx.drawImage(tag_background_image,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(tag_rover_image,rover_x,rover_y, rover_height, rover_width);
}
window.addEventListener("keydown", keyDown);
function keyDown(e){
    keyPressed=e.keyCode;
    console.log("keyPressed");
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
}
