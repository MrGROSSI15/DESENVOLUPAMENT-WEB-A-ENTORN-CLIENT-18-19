window.onload = function () {
    var tria = tornaOptionIncidencies();
    var incidencies = JSON.parse(tria);
    selecciona = "";
    id = "";
    var tria = document.getElementById("tria");
    for (var obj in incidencies) {

        select = document.createElement("option");
        selecciona = document.createTextNode(incidencies[obj].lloc + " " + incidencies[obj].data);
        select.setAttribute("value", incidencies[obj].id);

        select.appendChild(selecciona);
        tria.appendChild(select);
        

    }

}