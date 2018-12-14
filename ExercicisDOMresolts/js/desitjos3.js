function elimina(e) {
    var objecte=e.target;
    var liObjecte = objecte.parentNode;
    var ulObjecte = liObjecte.parentNode;
    ulObjecte.removeChild(liObjecte);

}

function canviaLlista(e) {
    var objecte=e.target;
    var liObjecte = objecte.parentNode;
    var ulObjecte = liObjecte.parentNode;
    //ulObjecte.removeChild(liObjecte);
    var novaUl;
    if (ulObjecte === document.getElementById("llista")) {
        novaUl = document.getElementById("llistaC");
    } else {
        novaUl = document.getElementById("llista");
    }
    novaUl.appendChild(liObjecte);
}


function afegir() {
    var nou = document.getElementById("nou").value;
    var nouLi = document.createElement("li");
    var text = document.createTextNode(nou + " ");
    nouLi.appendChild(text);
    //Crear link esborra
    var esborra = document.createElement("a");
    text = document.createTextNode("Esborra");
    esborra.appendChild(text);
    esborra.setAttribute("href", "#");
    esborra.addEventListener("click", elimina);
    nouLi.appendChild(esborra);

    text = document.createTextNode(" ");
    nouLi.appendChild(text);
    //Crear link canviar
    var canvia = document.createElement("a");
    text = document.createTextNode("Canvia");
    canvia.appendChild(text);
    canvia.setAttribute("href", "#");
    canvia.addEventListener("click", canviaLlista);
    nouLi.appendChild(canvia);

    var l = document.getElementById("llista");
    l.appendChild(nouLi);
    
}


window.onload = function () {
    document.getElementById("boto").onclick = afegir;
};