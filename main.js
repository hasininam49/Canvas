canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent = "empty";
var lastpositionofx, lastpositionofy ;
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    currentpositionofx = e.clientX - canvas.offsetLeft;
    currentpositionofy = e.clientY - canvas.offsetTop;
    if (mouseEvent = "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastpositionofx + "y = " + lastpositionofy);
        ctx.moveTo(lastpositionofx, lastpositionofy);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + currentpositionofx + "y = " + currentpositionofy);
        ctx.lineTo(currentpositionofx, currentpositionofy);
        ctx.stroke();
    }
 lastpositionofx = currentpositionofx;
 lastpositionofy = currentpositionofy;


}