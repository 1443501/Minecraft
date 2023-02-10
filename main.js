var canvas= new fabric.Canvas("myCanvas");
blockwidth=30;
blockheight=30;
playerx=10;
playery=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerx,
            left:playerx
    });
    canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(blockwidth);
        block_image_object.scaleToHeight(blockheight);
        block_image_object.set({
            top:playery,
            left:playerx

        } );
        canvas.add(block_image_object);
    });

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed=="80"){
blockwidth=blockwidth+10;
blockheight=blockheight+10;
document.getElementById("current_width").innerHTML=blockwidth;
document.getElementById("current_height").innerHTML=blockheight;

    }


if(e.shiftKey == true && keyPressed=="77"){
    blockwidth=blockwidth-10;
   blockheight=blockheight-10;
document.getElementById("current_width").innerHTML=blockwidth;
document.getElementById("current_height").innerHTML=blockheight;

};
if(keyPressed=="38"){
    up();

}
if(keyPressed=="40"){
    down();

}
if(keyPressed=="37"){
    left();

}
if(keyPressed=="39"){
    right();

}
if(keyPressed=="87"){
    new_image("wall.jpg");

}
if(keyPressed=="71"){
    new_image("ground.png");

}
if(keyPressed=="76"){
    new_image("light_green.png");

}
if(keyPressed=="84"){
    new_image("trunk.jpg");

}
if(keyPressed=="82"){
    new_image("roof.jpg");

}
if(keyPressed=="89"){
    new_image("yellow_wall.png");

}
if(keyPressed=="68"){
    new_image("dark_green.png");

}
if(keyPressed=="85"){
    new_image("unique.png");

}
if(keyPressed=="67"){
    new_image("cloud.jpg");

}
}
