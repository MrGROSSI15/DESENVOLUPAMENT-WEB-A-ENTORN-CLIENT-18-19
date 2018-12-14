window.onload = function () {

    var dades = inicialitzaDB();
    var producte = JSON.parse(dades);
    missatge = "";

    for (var obj in producte) {

        var div = document.createElement("div");

        div.className = 'item';
        var nom = producte[obj].nom;
        var preu = producte[obj].preuUnitari;
        var quantitat = producte[obj].quantitat;
        var imatge = producte[obj].imatge;

        var img = document.createElement("img");
        img.setAttribute("src", imatge);
        div.appendChild(img);

        var p = document.createElement("p");
        var text1 = document.createTextNode(nom);
        p.appendChild(text1);
        div.appendChild(p);
        //preu
        var p2 = document.createElement("p");
        var span = document.createElement("span");
        var text2 = document.createTextNode("Preu: " + preu);
        span.appendChild(text2);
        p2.appendChild(span);
        div.appendChild(p2);
        //quantitat
        var span2 = document.createElement("span");
        var text3 = document.createTextNode("Quantitat: " + quantitat);
        span2.appendChild(text3);
        p2.appendChild(span2);
        div.appendChild(p2);
        //total
        var span3 = document.createElement("span");
        var total = preu * quantitat;
        var text4 = document.createTextNode("Total: " + total);
        span3.appendChild(text4);
        p2.appendChild(span3);
        div.appendChild(p2);
        //imatge basura
        var basura = document.createElement("img");
        basura.setAttribute("src", "imatges/esborra.png");
        document.getElementById("llista").appendChild(div);

        basura.onclick = eliminarProducte;
        p2.appendChild(basura);

    }

    function eliminarProducte(event) {
        var basura = event.target;
        var p1 = basura.parentNode;
        var p2 = p1.parentNode;
        var div = p2.parentNode;
        div.removeChild(p2);
    }

}