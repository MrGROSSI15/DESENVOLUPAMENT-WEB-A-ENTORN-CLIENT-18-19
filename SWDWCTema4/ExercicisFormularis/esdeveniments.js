var contador = 0;
window.onload = function(){
    function afegirEsdev(idElement, nomEsdev){
        document.getElementById(idElement).addEventListener(nomEsdev, myFunction);
    }
    function myFunction(event){
        
        contador ++;
        document.getElementById("mostra").innerHTML = contador + " - " + event.currentTarget.nodeName + " : " + event.type;
    }

    // afegirEsdev("mostra", "onmouseover");
    afegirEsdev("nom", "mousedown");
    afegirEsdev("nom", "mouseup");
    afegirEsdev("nom", "mouseover");
    afegirEsdev("llinatges", "mousemove");

    
    afegirEsdev("paragraf", "mousedown");
}