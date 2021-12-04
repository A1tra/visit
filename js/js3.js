var elements = document.getElementsByClassName("column");

var i;

function one() 
{
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 100%";
    }
}

function two() 
{
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 49%";
    }
}

function four() 
{
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "0 1 24%";
    }
}

var header = document.getElementById("number");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) 
{
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}