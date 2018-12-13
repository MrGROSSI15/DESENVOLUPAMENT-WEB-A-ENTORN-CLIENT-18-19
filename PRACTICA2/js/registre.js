// var dades = new Object();
// dades.nom = "";
// dades.tipus = "";
// dades.data = date();
// dades.telefon = "";
// dades.hora = date(hours);
// dades.durada = date(time);
var baseDeDades = new Object();

function validar() {
    var cadena = "Errors al formulari:\n";
    var resultat = true;
    var objecte;

    objecte = document.getElementById("aTNom");
    //Dades bàsiques
    if (!validarObligatori(objecte.value)) {
        errada(true, "- nom no pot ser buid\n");
    } else {
        errada(false);
    }
    objecte = document.getElementById("aSTipus");
    if (!validarObligatori(objecte.value)) {
        errada(true, "- llinatges no pot ser buid\n");
    } else {
        errada(false);
    }

    objecte = document.getElementById("aTTelefon");
    if (!validarTelefon(objecte.value, true) &&
        !validarTelefon(objecte.value, false)) {
        errada(true, "- telefon 1 ha de contenir un nombre de telefon vàlid\n");
    } else {
        errada(false);
    }
}
window.onload = function () {
    document.getElementById("dAlta").className = "ocult";
    document.getElementById("dConsulta").className = "ocult";
    document.getElementById("dAltres").className = "ocult";

    document.getElementById("liAfegir").onclick = function () {
        document.getElementById("dAlta").className = "info";
        document.getElementById("dConsulta").className = "ocult";
        document.getElementById("dAltres").className = "ocult";
    }
    document.getElementById("liConsulta").onclick = function () {
        document.getElementById("dAlta").className = "ocult";
        document.getElementById("dConsulta").className = "info";
        document.getElementById("dAltres").className = "ocult";


    }
    document.getElementById("liAltres").onclick = function () {
        document.getElementById("dAlta").className = "ocult";
        document.getElementById("dConsulta").className = "ocult";
        document.getElementById("dAltres").className = "info";

    }
    document.getElementById("bSubmit").onsubmit = validar;

    document.getElementById("aTNom").required = true;
    document.getElementById("aTTelefon").required = true;
    document.getElementById("aSTipus").required = true;

}