var sentence_win = "<p>Gratulálunk, Ön egy igazi kínai állampolgár!</p>"
var sentence_lose = "<p>Ön elbukta a Kína Social Credit tesztet. 1 napja van még, míg John Xina elkapja Önt!</p>"

var img = document.createElement("img"); 

img.win = "mrbeast.gif"; 

img.lose = "laoganma.gif"; 

function ellenoriz() {
    if(document.getElementById("kerdes1_1").checked
    && document.getElementById("kerdes2_2").checked
    && document.getElementById("kerdes3_2").checked
    && document.getElementById("kerdes4_2").checked
    && document.getElementById("kerdes5_1").checked
    && document.getElementById("kerdes6_1").checked) {
        document.getElementById("lose").style.display = "none";
        document.getElementById("win").style.display = "block";
        document.getElementById("win").innerHTML = sentence_win + '<img src="'+img.win+'" />';  
    }
    else {
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "block";
        document.getElementById("lose").innerHTML = sentence_lose + '<img src="'+img.lose+'" />';
    }
}