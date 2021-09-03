var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var width = screen.width;
var newwidth = screen.width - 70;
var height = screen.height;
var newheight = screen.height - 70;
color = "black";
width_of_line = 2;
if (width < 992) {
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log("my_touchstart");
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    console.log("my_touchmove")
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.arc(current_position_of_touch_x, current_position_of_touch_y, 40, 0, Math.PI*2)
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}