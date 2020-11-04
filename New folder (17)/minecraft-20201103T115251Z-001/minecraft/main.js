var canvas = new fabric.Canvas('myCanvas'); 
var player_x = 10; player_y = 10; 
var block_image_width = 30; 
var block_image_height = 30; 
var player_object= ""; 
var block_image_object= "";
 function player_update() 
 { 
     fabric.Image.fromURL("player.png", function(Img) 
     { 
         player_object = Img; 
         player_object.scaleToWidth(150); 
         player_object.scaleToHeight(140); 
         player_object.set({ top:player_y, left:player_x }); 
         canvas.add(player_object);
         }); 
        } 
        
        function new_image(get_image) 
        { 
            fabric.Image.fromURL(get_image, function(Img) 
            { 
                block_image_object = Img; 
                block_image_object.scaleToWidth(block_image_width); 
                block_image_object.scaleToHeight(block_image_height);
                block_image_object.set({ top:player_y, left:player_x }); 
                canvas.add(block_image_object); 
            }); 
        }
        player_update();

window.addEventListener("keydown", pressed);

function pressed (e) {
   var code = e.keyCode;
   console.log(code);

   if ( e.shiftKey == true && code == '80' ){
       console.log("shift and p is pressed");
       block_image_width = block_image_width + 10;
       block_image_height = block_image_height + 10;
       document.getElementById("current_width").innerHTML = block_image_width;
       document.getElementById("current_height").innerHTML = block_image_height;
   }
   if ( e.shiftKey == true && code == '77' )
   {
    console.log("shift and m is pressed");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
   }

   if ( code == '38' )
   {
    console.log("up");
    up();
   }
   if ( code == '40' )
   {
    console.log("down");
    down();
   }
   if ( code == '37' )
   {
    console.log("left");
    left();
   }
   if ( code == '39' )
   {
    console.log("right");
    right();
   }

   if ( code == '87' )
   {
    new_image( 'wall.jpg' );
    console.log("w")
   }
   if ( code == '71' )
   {
    new_image( 'ground.png' );
    console.log("g")
   }
   if ( code == '76' )
   {
    new_image( 'light_green.png' );
    console.log("l")
   }
   if ( code == '84' )
   {
    new_image( 'trunk.jpg' );
    console.log("t")
   }
   if ( code == '82' )
   {
    new_image( 'roof.jpg' );
    console.log("r")
   }
   if ( code == '89' )
   {
    new_image( 'yellow_wall.png' );
    console.log("y")
   }
   if ( code == '68' )
   {
    new_image( 'dark_green.png' );
    console.log("d")
   }
   if ( code == '85' )
   {
    new_image( 'unique.png' );
    console.log("u")
   }
   if ( code == '67' )
   {
    new_image( 'cloud.jpg' );
    console.log("c")
   }

}

function up() 
{
   if ( player_y > 0 )
   {
       player_y = player_y - block_image_height;
       console.log("block image height is" + block_image_height);
       console.log("up is pressed, x = " + player_x + "y = " + player_y);
       canvas.remove(player_object);
       player_update();
   } 
}

function down() 
{
    if ( player_y < 500 )
   {
       player_y = player_y + block_image_height;
       console.log("block image height is" + block_image_height);
       console.log("down is pressed, x = " + player_x + "y = " + player_y);
       canvas.remove(player_object);
       player_update();
   } 
}

function left() 
{
    if ( player_y > 0 )
    {
        player_x = player_x - block_image_width;
        console.log("block image width is" + block_image_width);
        console.log("left is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update();
    } 
}
function right() 
{
    if ( player_y < 850 )
    {
        player_x = player_x + block_image_width;
        console.log("block image width is" + block_image_width);
        console.log("right is pressed, x = " + player_x + "y = " + player_y);
        canvas.remove(player_object);
        player_update();
    } 
}