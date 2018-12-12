window.onload = function () {
    document.getElementById("bStop").disabled = true; //lleva stop 
    document.getElementById("bStart").onclick = function(){
        document.getElementById("bStop").disabled = false; //posa stop
        document.getElementById("bStart").disabled = true; //lleva start
        
        
    }
    document.getElementById("bStop").onclick = function(){
        document.getElementById("bStop").disabled = true;
        document.getElementById("bStart").disabled = false;
       
    }

}
var hores = 0;
var minuts = 0;
var segons = 0;

