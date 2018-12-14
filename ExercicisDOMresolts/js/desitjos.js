function afegir() {
    var nou = document.getElementById("nou").value;
    var nouLi = document.createElement("li");
    var text = document.createTextNode(nou);
    nouLi.appendChild(text);
    var l = document.getElementById("llista");
    l.appendChild(nouLi);
}

window.onload = function () {
    document.getElementById("boto").onclick = afegir;
}