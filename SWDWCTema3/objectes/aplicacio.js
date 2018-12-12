window.onload = function() {
    var descarregues = 0;
    var aplicacio = {
        nom: "Netflix",
        tipus: "Multimedia",
        descripcio: "Per mirar coses",
        preu:"0",
        setaplicacio : function(){
            return this.nom + " " + this.tipus + " " +
            this.descripcio + " " + this.preu;
        }
    };
}