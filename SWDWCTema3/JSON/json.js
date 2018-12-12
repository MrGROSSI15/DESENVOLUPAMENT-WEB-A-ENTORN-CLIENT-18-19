var alumne = {
    nom:"Marc",
    cognom:"Grossi",
    cognom2:"Bermejo"
}

// 2.Crea a json.js una funció que dins d'ella crei un objecte Javascript i torni aquest objecte. 
// Crea la pàgina objecteJavascript.html. Mostra la informació de l'objecte retornat per la funció a 
// la pàgina utilitzant la notació per punts.
function functioAl(){
    return alumne;
}
// 3.Crea a json.js una funció que torni una cadena que contengui un objecte en format JSON. 
// A la pàgina objecteJSON.html mostra aquesta informació utilitzant la notació per punts.
function functioAl3(){
    return '{"nom":"Marc","cognom":"Grossi","cognom2":"Bermejo"}';
}

function array4(){
    var nom = '{"persones":[' +
    '{"firstName":"Marc","lastName":"Grossi" },' +
    '{"firstName":"Ayoub","lastName":"Bony" },' +
    '{"firstName":"Toni","lastName":"Figuerola" }]}'
    
    return nom;
}


