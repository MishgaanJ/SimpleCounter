var screen=document.getElementById("screen");
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var i=0;

screen.innerText=0;

function increment(){
    i++;
    screen.innerText=i;

}
function reset(){
    i=0;
    screen.innerText=i;
}