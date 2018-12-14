
function afegir() {
    var nou = document.getElementById("nou").value;
    var nouLi = document.createElement("li");
    var text = document.createTextNode(nou + " ");
    nouLi.appendChild(text);
    //Crear link esborra
    var esborra = document.createElement("a");
    text = document.createElement("img");
    text.setAttribute("src", "imatges/delete.gif");
    text.setAttribute("title", "Esborra");

    esborra.appendChild(text);
    esborra.setAttribute("href", "#");
    esborra.setAttribute("onclick", "elimina(this)");
    nouLi.appendChild(esborra);

    text = document.createTextNode(" ");
    nouLi.appendChild(text);

    //Crear link canviar
    var canvia = document.createElement("a");
    text = document.createElement("img");
    text.setAttribute("src", "imatges/next-icon.png");
    text.setAttribute("title", "Canvia");
    canvia.appendChild(text);
    canvia.setAttribute("href", "#");
    canvia.setAttribute("onclick", "canvia(this)");
    nouLi.appendChild(canvia);

    var l = document.getElementById("llista");
    l.appendChild(nouLi);
}

function elimina(objecte) {
    var liObjecte = objecte.parentNode;
    var ulObjecte = liObjecte.parentNode;
    ulObjecte.removeChild(liObjecte);

}

function canvia(objecte) {
    var liObjecte = objecte.parentNode;
    var ulObjecte = liObjecte.parentNode;
    //ulObjecte.removeChild(liObjecte);
    var novaUl;
    var im = objecte.firstChild;
    if (ulObjecte == document.getElementById("llista")) {
        novaUl = document.getElementById("llistaC");
        im.setAttribute("src", "imatges/back-icon.png");
    } else {
        novaUl = document.getElementById("llista");
        im.setAttribute("src", "imatges/next-icon.png");
    }
    novaUl.appendChild(liObjecte);
}

window.onload = function () {
    document.getElementById("boto").onclick = afegir;
};