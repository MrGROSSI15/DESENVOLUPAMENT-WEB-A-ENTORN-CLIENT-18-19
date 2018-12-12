window.onload = function () {
    document.getElementById("nom").required = true;
    document.getElementById("nomFiscal").required = true;
    document.getElementById("personaContacte").required = true;
    document.getElementById("cif").required = true;
    document.getElementById("email").required = true;
    // document.getElementById("bNetejar").onclick =   alert("Estas segur que vols borrar?");
    document.getElementById("bNetejar").onreset = function () {
        alert("Estas segur que vols borrar?");
    }
    document.getElementById("nom").onchange = function () {
        document.getElementById("nomAvis").className = "avis";
    }
    document.getElementById("nomFiscal").onchange = function () {
        document.getElementById("avisNomAvis").className = "avis";
    }
    document.getElementById("personaContacte").onchange = function () {
        document.getElementById("avisPersona").className = "avis";
    }
    document.getElementById("cif").onchange = function () {
        document.getElementById("avisCif").className = "avis";
    }
}