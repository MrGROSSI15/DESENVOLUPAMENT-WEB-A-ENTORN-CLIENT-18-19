function baseDades() {
    var dades = [
        {nom: "Luke Skywalker", tipus: "rebuda", data: "2015-12-11", telefon: "666777888", hora: "12:58", durada: 125},
        {nom: "Han Solo", tipus: "feta", data: "2015-12-10", telefon: "666777888", hora: "12:58", durada: 544},
        {nom: "Anakin Skywalker", tipus: "perduda", data: "2015-12-10", telefon: "677455872", hora: "22:15", durada: 0},
        {nom: "Anakin Skywalker", tipus: "rebuda", data: "2015-12-11", telefon: "677455872", hora: "09:01", durada: 45}, 
        {nom: "Obi-Wan Kenobi", tipus: "feta", data: "2015-12-11", telefon: "699855233", hora: "09:10", durada: 168},
        {nom: "Obi-Wan Kenobi", tipus: "rebuda", data: "2015-12-10", telefon: "699855233", hora: "18:21", durada: 421},
        {nom: "Yoda", tipus: "perduda", data: "2015-12-10", telefon: "600000001", hora: "12:25", durada: 0},
        {nom: "R2-D2", tipus: "rebuda", data: "2015-12-11", telefon: "610010110", hora: "11:45", durada: 6},
        {nom: "C-3PO", tipus: "rebuda", data: "2015-12-10", telefon: "610010111", hora: "20:15", durada: 655}];

    /** Filtre les dades segons els paràmetres i torna el resultat en format JSON
     * 
     * @param {type} data La data de la trucada. undefined o la cadena buida volen dir qualsevol data.
     * @param {type} tipus EL tipus de trucada. undefined o qualsevol volen dir qualsevol tipus.
     * @returns {String} El JSON amb les trucades coincidents amb els paràmetres.
     */
    this.tornaTrucades = function (data, tipus) {

        var resultat = [];
        for (var trucada in dades) {
            if (typeof tipus === "undefined" || tipus === "Qualsevol" || tipus === dades[trucada].tipus) {
                if (typeof data === "undefined" || data === "" || data === dades[trucada].data) {
                    resultat.push(dades[trucada]);
                }
            }
        }
        return JSON.stringify(resultat);
    };

    /** Afegeix una nova trucada a la base de dades. L'hi heu de passar les dades dl formulari.
     * 
     * @param {type} pNom
     * @param {type} pTelefon
     * @param {type} pData
     * @param {type} pHora
     * @param {type} pDurada
     * @param {type} pTipus
     * @returns {undefined}
     */
    this.afegeixTrucada = function (pNom, pTelefon, pData, pHora, pDurada, pTipus) {
        var nova = {nom: pNom, tipus: pTipus, data: pData, telefon: pTelefon, hora: pHora, durada: pDurada};
        dades.push(nova);
//        alert(JSON.stringify(dades));
    };

    function comprovaExistencia(array, valor) {

        for (var index in array) {
            if (array[index] === valor) {
                return true;
            }
        }
        return false;
    }

    /**Torna un JSON amb un array amb els diferents noms que hi ha a la base de dades.
     * 
     * @returns {String} El JSON amb l'array.
     */
    this.tornaNoms = function () {
        var noms = [];
        for (var index in dades) {
            if (!comprovaExistencia(noms, dades[index].nom)) {
                noms.push(dades[index].nom);
            }
        }
        noms.sort();
        return JSON.stringify(noms);
    };


    this.tornaTrucadesPerNom = function (nom) {
        var resultat = [];
        for (var trucada in dades) {
            if (typeof nom === "undefined" || nom === "" || nom === dades[trucada].nom) {
                resultat.push({tipus:dades[trucada]["tipus"],data:dades[trucada]["data"],hora:dades[trucada]["hora"], durada:dades[trucada]["durada"]});
            }
        }

        return JSON.stringify(resultat);
    };
}
