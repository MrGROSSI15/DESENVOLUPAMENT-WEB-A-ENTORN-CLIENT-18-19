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

}