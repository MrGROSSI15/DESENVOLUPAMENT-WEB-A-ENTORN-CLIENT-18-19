function aplicacio(pnom, ptipus, pdescripcio, ppreu) {
    var that = this;
    this.tipus = ptipus;
    this.nom = pnom;
    this.descripcio = pdescripcio;
    this.preu = ppreu;
    var descarregues = 0;
    //this.descarregues = 5;

    this.incrementaDescarregues = function () {
        descarregues++;
    };

    this.getDescarregues = function () {
        return descarregues;
    };
    
    this.getNom = function () {
        return that.nom;
    };

    this.setNom = function (nouNom) {
        that.nom = nouNom;
    };

    this.getTipus = function () {
        return that.tipus;
    };

    this.setTipus = function (nouTipus) {
        that.tipus = nouTipus;
    };

    this.getDescripcio = function () {
        return that.descripcio;
    };

    this.setDescripcio = function (novaDescripcio) {
        that.descripcio = novaDescripcio;
    };

    this.getPreu = function () {
        return that.preu;
    };

    this.setPreu = function (nouPreu) {
        that.preu = nouPreu;
    };

    //init();

    // this.setNom(pnom);

}

aplicacio.prototype.comentari = "Sense comentaris";

aplicacio.prototype.canviaComentari = function (nouComentari) {
    this.comentari = nouComentari;
};


