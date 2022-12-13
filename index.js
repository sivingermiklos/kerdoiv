var sentence_win = "<p>Gratulálunk, ön egy igazi kínai állampolgár</p>";
var sentece_lose = "<p>Ön elbukta a kína szociális kredit tesztet. 1 napja van még, míg John Xzina elkapja önt!</p>";
function ellenoriz() {
    if(document.getElementById("kerdes1_1").checked
    && document.getElementById("kerdes2_2").checked
    && document.getElementById("kerdes3_2").checked
    && document.getElementById("kerdes4_2").checked
    && document.getElementById("kerdes5_1").checked
    && document.getElementById("kerdes6_1").checked) {
        document.getElementById("win").innerHTML = sentence_win + "johnxina.png";
    }
    else {
        document.getElementById("lose").innerHTML = sentece_lose + "johnxina.png";
    }
}