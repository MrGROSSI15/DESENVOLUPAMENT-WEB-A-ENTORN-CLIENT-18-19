var dades;

function zeros(xifra) {
    var s = xifra + "";
    while (s.length < 2) {
        s = "0" + s;
    }
    return s;
}

function formataSegons(segons) {
    var cadena = "";
    var hores = Math.floor(segons / 3600);
    segons = segons % 3600;
    var minuts = Math.floor(segons / 60);
    segons = segons % 60;
    return (hores > 0 ? zeros(hores) + ":" : "") + zeros(minuts) + ":" + zeros(segons);
}

function mostraDiv(ident) {
    var capes = ["dAlta", "dConsulta", "dAltres"];
    for (var index in capes) {
        document.getElementById(capes[index]).className = "ocult";
    }
    if (validarObligatori(ident)) {
        document.getElementById(ident).removeAttribute("class");
    }
}

function alta() {
    mostraDiv("dAlta");
}

function consulta() {
    mostraDiv("dConsulta");
    //alert(dades.tornaNoms());
    var noms = JSON.parse(dades.tornaNoms());

    var llista = document.getElementById("sNom");
    while (llista.lastChild) {
        llista.removeChild(llista.lastChild);
    }
    noms.unshift("Ningú");
    for (var index in noms) {
        var opcio = document.createElement("option");
        opcio.setAttribute("value", noms[index]);
        var texte = document.createTextNode(noms[index]);
        opcio.appendChild(texte);
        llista.appendChild(opcio);
    }

}

function altres() {
    mostraDiv("dAltres");
}

function validarAlta() {
    var correcte = true;

    if (!validarObligatori(document.getElementById("aTNom").value)) {
        correcte = false;
        document.getElementById("aTNom").previousSibling.className = "error";
    } else {
        document.getElementById("aTNom").previousSibling.removeAttribute("class");
    }
    if (!validarObligatori(document.getElementById("aTTelefon").value) || !validarTelefon(document.getElementById("aTTelefon").value)) {
        correcte = false;
        document.getElementById("aTTelefon").previousSibling.className = "error";
    } else {
        document.getElementById("aTTelefon").previousSibling.removeAttribute("class");
    }
    if (!validarObligatori(document.getElementById("aTData").value) && !validarData(document.getElementById("aTData").value)) {
        correcte = false;
        document.getElementById("aTData").previousSibling.className = "error";
    } else {
        document.getElementById("aTData").previousSibling.removeAttribute("class");
    }
    if (!validarObligatori(document.getElementById("aTHora").value)) {
        correcte = false;
        document.getElementById("aTHora").previousSibling.className = "error";
    } else {
        document.getElementById("aTHora").previousSibling.removeAttribute("class");
    }
    if (!validarObligatori(document.getElementById("aTDurada").value) && !validarSencer(document.getElementById("aTDurada").value)) {
        correcte = false;
        document.getElementById("aTDurada").previousSibling.className = "error";
    } else {
        document.getElementById("aTDurada").previousSibling.removeAttribute("class");
    }
    if (!validarObligatori(document.getElementById("aSTipus").value) || document.getElementById("aSTipus").value === "Qualsevol") {
        correcte = false;
        document.getElementById("aSTipus").previousSibling.className = "error";
    } else {
        document.getElementById("aSTipus").previousSibling.removeAttribute("class");
    }

    return correcte;
}

window.onload = function () {
    dades = new baseDades();

    mostraDiv();
    document.getElementById("liAfegir").onclick = alta;
    document.getElementById("liConsulta").onclick = consulta;
    document.getElementById("liAltres").onclick = altres;

    document.getElementById("fAlta").onsubmit = function (e) {
        e.preventDefault();
        if (validarAlta()) {
            dades.afegeixTrucada(document.getElementById("aTNom").value, document.getElementById("aTTelefon").value, document.getElementById("aTData").value, document.getElementById("aTHora").value, document.getElementById("aTDurada").value, document.getElementById("aSTipus").value);
            alert("Inserció correcte");
        } else {
            alert("Hi ha errades al formulari");
        }
    };

    function eliminarFills(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }
    
    
    document.getElementById("sNom").onchange = function () {
        var trucades = JSON.parse(dades.tornaTrucadesPerNom(document.getElementById("sNom").value));

        var cos = document.getElementById("tCos");
        eliminarFills(cos);

        eliminarFills(document.getElementById("total"));
        eliminarFills(document.getElementById("durada"));

        var totalDurada = 0;
        for (var index in trucades) {
            var fila = document.createElement("tr");
            totalDurada += trucades[index]["durada"] * 1;
            trucades[index]["durada"]=formataSegons(trucades[index]["durada"]);
            for (var camp in trucades[index]) {
                var cela = document.createElement("td");
                
                var text = document.createTextNode(trucades[index][camp]);
                cela.appendChild(text);
                fila.appendChild(cela);
            }
            cos.appendChild(fila);
        }
        var vTotal = document.createTextNode("Nombre trucades: "+trucades.length);
        document.getElementById("total").appendChild(vTotal);
        var eDurada = document.createTextNode(formataSegons(totalDurada));
        document.getElementById("durada").appendChild(eDurada);
        
    };

};


