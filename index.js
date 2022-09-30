//hide answer components by id  
document.getElementById("a1").style.display = "none";
document.getElementById("a2").style.display = "none";
document.getElementById("a3").style.display = "none";
document.getElementById("a4").style.display = "none";
document.getElementById("a5").style.display = "none";

function questionOne() {
    if (document.getElementById("a1").style.display === "none")
    {
        document.getElementById("a1").style.display = "block";
    }
    else {
        document.getElementById("a1").style.display = "none";
    }
}
function questionTwo() {
    if (document.getElementById("a2").style.display === "none")
    {
        document.getElementById("a2").style.display = "block";
    }
    else {
        document.getElementById("a2").style.display = "none";
    }
}
function questionThree() {
    if (document.getElementById("a3").style.display === "none")
    {
        document.getElementById("a3").style.display = "block";
    }
    else {
        document.getElementById("a3").style.display = "none";
    }
}
function questionFour() {
    if (document.getElementById("a4").style.display === "none")
    {
        document.getElementById("a4").style.display = "block";
    }
    else {
        document.getElementById("a4").style.display = "none";
    }
}
function questionFive() {
    if (document.getElementById("a5").style.display === "none")
    {
        document.getElementById("a5").style.display = "block";
    }
    else {
        document.getElementById("a5").style.display = "none";
    }
}