
var x = 1;

var y = setInterval (function(){ 
    document.getElementById("num").innerHTML = Number(x);
    x++;
    clearInterval(y);
}, 200);
    
