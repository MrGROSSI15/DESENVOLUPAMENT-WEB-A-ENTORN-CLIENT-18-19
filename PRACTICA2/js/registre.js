window.onload = function () {
    document.getElementById("dAlta").className = "ocult";
    document.getElementById("dConsulta").className = "ocult";
    document.getElementById("dAltres").className = "ocult";
    bbdd = new baseDades();

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

    }
}