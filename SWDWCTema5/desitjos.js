window.onload = function () {
    document.getElementById("boto").onclick = function () {
        //primers desitjos
        var t = document.getElementById("text").value;
        var text = document.createTextNode(t);
        
        var li = document.createElement("li");
        li.appendChild(text);
        var llista = document.getElementById("llista");
        llista.appendChild(li);
        var b = document.createElement("button");
        b.addEventListener("click",borrar);
        var valueB = document.createTextNode("");
        b.setAttribute("class","fas fa-times-circle fa-2x")
        
        b.appendChild(valueB);
        li.appendChild(b);

        // altres desitjos
        var mo = document.createElement("button");
        var valueM = document.createTextNode("");
        mo.setAttribute("class","fas fa-arrows-alt-h fa-2x");
        mo.appendChild(valueM);
        li.appendChild(mo);
        mo.addEventListener("click",moure);
        
    
    }
    function borrar(bo){
        var li = bo.target.parentNode;
        var ul = li.parentNode;
        ul.removeChild(li);

    }

    function moure(mo){
        var li = mo.target.parentNode;
        // alert(li);
        var ul = li.parentNode;
        // alert(ul);

        var llista2 = document.getElementById("llista2");
        llista2.appendChild(li);

        if(ul.id == "llista"){ //.id es una propietat de ul
            var llista2 = document.getElementById("llista2");
            llista2.appendChild(li);
        }else{
            var llista = document.getElementById("llista");
            llista.appendChild(li);
        }
    }


}