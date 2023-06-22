
var x = 1;

var y = setInterval (function(){ 
    document.getElementById("num").innerHTML = Number(x);
    x++;
    if (x == 21) {
        clearInterval(y);
    }
}, 200);
    