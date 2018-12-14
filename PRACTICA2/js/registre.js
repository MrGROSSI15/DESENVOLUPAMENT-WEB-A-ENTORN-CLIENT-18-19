window.onload = function () {
// Inicialització
// Ha de crear un objecte base de dades que serà el que utilitzarem a tots els scripts de la pàgina.
    bbdd = new baseDades();
    // Inicialment les tres capes ("dAlta", "dConsulta", "dAltres") es veuen. Ocultau-les totes tres. Programau els li del menú de manera que en pitjar-los mostrin el div que toca i amaguin els altres.
    document.getElementById("dAlta").className = "ocult";
    document.getElementById("dConsulta").className = "ocult";
    document.getElementById("dAltres").className = "ocult";

    document.getElementById("liAfegir").onclick = function () {
        // document.getElementById("aTNom").required = true;
        // document.getElementById("aTTelefon").required = true;
        // document.getElementById("aSTipus").required = true;
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
    // Afegir trucada
    document.getElementById("fAlta").onsubmit = function (e) {
        var error = false;

        var data = document.getElementById("aTData");
        var hora = document.getElementById("aTHora");
        var durada = document.getElementById("aTDurada");
        
        var nom = document.getElementById("aTNom");
        var nomLabel = nom.previousSibling;
        if (validarObligatori(nom.value)) {
            nomLabel.classList.remove("error");
        } else {
            nomLabel.classList.add("error");
            alert("fica un nom");
            error = true;
        }

        var telf = document.getElementById("aTTelefon");
        var telfLabel = telf.previousSibling;
        if (validarTelefon(telf.value)) {
            telfLabel.classList.remove("error");

        } else {
            telfLabel.classList.add("error");
            alert("fica un telf perfavor ");
            error = true;
        }
        var tipus = document.getElementById("aSTipus");
        var tipusLabel = tipus.previousSibling;
        if(tipus.value != "Qualsevol"){
            tipusLabel.classList.remove("error");
        }else{
            tipusLabel.classList.add("error");
            alert("fica un tipus valid perfavor");
            error = true;
        }


        if (!error) {
            alert("Ha anat be");
            bbdd.afegeixTrucada(nom.value,telf.value,data.value,hora.value,durada.value,tipus.value);
            nom.value= "";
            telf.value = "";
            data.value = "";
            hora.value = "";
            durada.value = "";
            tipus.value = "";

        }
        e.preventDefault(); //evitar que s'envii el formulari

        //	Consulta de trucades per nom

        // En mostrar el div ha de carregar el select amb els noms de la base de dades. Utilitza la funció tornaNoms(). 
        // El valor de l'opció ha de ser el nom que hem rebut, que també és el que ha de mostrar. Hi ha d'haver l'opció
        //  Ningú seleccionada per defecte.
        function mostraDiv(ident) {
            var capes = ["dAlta", "dConsulta", "dAltres"];
            for (var index in capes) {
                document.getElementById(capes[index]).className = "ocult";
            }
            if (validarObligatori(ident)) {
                document.getElementById(ident).removeAttribute("class");
            }
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


    }
}