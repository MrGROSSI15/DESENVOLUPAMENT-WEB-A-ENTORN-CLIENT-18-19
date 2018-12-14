function tornaOptionIncidencies() {
    var dades = [{id: 1, lloc: "INFO3", data: "01/12/2018"}
        , {id: 2, lloc: "INFO4", data: "02/12/2018"},
        {id: 3, lloc: "INFO5", data: "03/12/2018"}];
    return JSON.stringify(dades);
}

function tornaDadesIncidencia(id) {
    var dades;
    switch (id) {
        case "1": {
            dades = {
                id: 1,
                lloc: "INFO3",
                dataCom: "2018-12-01",
                prioritat: 5,
                estat: "Oberta",
                descripcio: "La tira de fluorescents més propera a la finestra fa un renou insoportable.",
                dataTancament: null
            };
            break;
        }
        case "2": {
            dades = {
                id: 2,
                lloc: "INFO4",
                dataCom: "2018-12-02",
                prioritat: 7,
                estat: "Tancada",
                descripcio: "La pissarra digital no respon.",
                dataTancament: "2018-12-12"
            };
            break;
        }
        case "3": {
            dades = {
                id: 3,
                lloc: "INFO5",
                dataCom: "2018-12-03",
                prioritat: 9,
                estat: "Oberta",
                descripcio: "El punt d'accés wifi no dona xarxa.",
                dataTancament: null
            };
            break;
        }
    }
    return JSON.stringify(dades);
}

function tornaActuacions(id) {
    var dades;
    switch (id) {
        case "1": {
            dades = [{ordre: 1, descripcio: "Repasat tots els tubs"}, {
                ordre: 2,
                descripcio: "Canviats els cebadors"
            }, {ordre: 3, descripcio: "Revisats els condensadors"}];
            break;
        }
        case "2": {
            dades = [];
            break;
        }
        case "3": {
            dades = [{ordre: 1, descripcio: "Reinicar el punt d'accés"}, {
                ordre: 2,
                descripcio: "Comprovar connectivitat punt de xarxa"
            }, {ordre: 3, descripcio: "Canviar el canal"}];
            break;
        }
    }
    return JSON.stringify(dades);
}