function LiniaCompra(nom, preuUnitari, quantitat, imatge){
    this.nom=nom;
    this.preuUnitari=preuUnitari;
    this.quantitat=quantitat;
    this.imatge=imatge;
}


function inicialitzaDB(){
    var dades=[];
    dades.push(new LiniaCompra("Raspberry Pi 3+",39.95,1,"imatges/raspberry.webp"));
    dades.push(new LiniaCompra("Carcassa oficial Raspberry Pi 3+",10.05,1,"imatges/case.jpg"));
    dades.push(new LiniaCompra("Font d'alimnetació",14.99,1,"imatges/alimentacio.jpg"));
    dades.push(new LiniaCompra("Micros SD 16 Gb",8.75,3,"imatges/microsd.jpg"));
    return JSON.stringify(dades);
}

