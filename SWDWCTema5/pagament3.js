window.onload = function () {
    document.getElementById("targeta").onchange = function () {
        // var radio = document.getElementById("targeta").value;
        var node = document.getElementById("divp");
        while (node.firstChild){
            node.removeChild(node.firstChild);
        }
        document.getElementById("targ").onclick = function(){
            document.getElementById("divp").className = "vistable";
        }
        // var div = document.getElementById("divp");
        // var tar = document.createElement("h5");
        // var texth = document.createTextNode("Pagament per tarjeta");
        // tar.appendChild(texth);
        // div.appendChild(tar);
        // var p = document.createElement("p");
        // var label = document.createElement("label");
        // var input = document.createElement("input");
        // label.setAttribute("for", "nomt");
        // var textl = document.createTextNode("Nombre tarjeta: ");
        // label.appendChild(textl);
        // input.setAttribute("type", "text");
        // input.setAttribute("name", "nomt");
        // input.setAttribute("id", "nomt");
        // div.appendChild(p);
        // div.appendChild(label);
        // div.appendChild(input);
        // var p2 = document.createElement("p");
        // var label2 = document.createElement("label");
        // var input2 = document.createElement("input");
        // label2.setAttribute("for", "cad");
        // var text2 = document.createTextNode("Caducitat: ");
        // label2.appendChild(text2);
        // input2.setAttribute("type", "text");
        // input2.setAttribute("name", "cad");
        // input2.setAttribute("id", "cad");
        // div.appendChild(p2);
        // div.appendChild(label2);
        // div.appendChild(input2);
        // var p3 = document.createElement("p");
        // var label3 = document.createElement("label");
        // var input3 = document.createElement("input");
        // label3.setAttribute("for", "codiVer");
        // var text3 = document.createTextNode("Codi Verificació: ");
        // label3.appendChild(text3);
        // input3.setAttribute("type", "text");
        // input3.setAttribute("name", "codi");
        // input3.setAttribute("id", "codi");
        // input3.setAttribute("maxLength", "3");
        // div.appendChild(p3);
        // div.appendChild(label3);
        // div.appendChild(input3);

    }
    // while div remove child nodes


    document.getElementById("transf").onclick = function () {
        var node = document.getElementById("divp");
        while (node.firstChild){
            node.removeChild(node.firstChild);
        }
        document.getElementById("tranfe").removeAttribute("type");
    //     var div = document.getElementById("divp");
    //     var tar = document.createElement("h5");
    //     var texth = document.createTextNode("Pagament per transferencia");
    //     tar.appendChild(texth);
    //     div.appendChild(tar);
    //     var p = document.createElement("p");
    //     var label = document.createElement("label");
    //     //var input = document.createElement("input");
    //     label.setAttribute("for", "nomt");
    //     var textl = document.createTextNode("El nombre IBAN és 123456789, quan tenguem la transferència se li enviarà un correu de confirmació ");
    //     label.appendChild(textl);
    //    // input.setAttribute("type", "text");
    //    // input.setAttribute("name", "nomi");
    //     //input.setAttribute("id", "nomi");

    //     div.appendChild(p);
    //     div.appendChild(label);
    //   //  div.appendChild(input);
        


    }
    document.getElementById("reset").onclick = function(){
        var node = document.getElementById("divp");
        while (node.firstChild){
            node.removeChild(node.firstChild);
        }
    }

}