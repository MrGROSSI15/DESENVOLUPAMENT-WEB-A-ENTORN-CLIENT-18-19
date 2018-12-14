function afegir() {
    var nou = document.getElementById("nou").value;
    var nouLi = document.createElement("li");
    var text = document.createTextNode(nou + " ");
    nouLi.appendChild(text);
    //Crear link
    var link = document.createElement("a");
    text = document.createTextNode("Esborra");
    link.appendChild(text);
    link.setAttribute("href", "#");
    link.setAttribute("onclick", "elimina(this)");
    nouLi.appendChild(link);

    var l = document.getElementById("llista");
    l.appendChild(nouLi);
}

function elimina(objecte) {
    var liObjecte = objecte.parentNode;
    var ulObjecte = liObjecte.parentNode;
    ulObjecte.removeChild(liObjecte);

}

window.onload = function () {
    document.getElementById("boto").onclick = afegir;
};