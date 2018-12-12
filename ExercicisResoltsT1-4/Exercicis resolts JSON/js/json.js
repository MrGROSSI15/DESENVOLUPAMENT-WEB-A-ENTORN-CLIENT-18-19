
function creaObjecteJavascript(){
    return {nom: "Joan", llinatges: "Morro Vallespir", cicle: "GSDAW", grup: "S1W"};
}

function creaObjecteJSON(){
    return '{"nom": "Joan", "llinatges": "Morro Vallespir", "cicle": "GSDAW", "grup": "S1W"}';
}

function creaArrayObjectesJSON(){
    return '[{"nom": "Jo", "llinatges": "Mateix", "dni": "11111111H"}, {"nom": "Tu", "llinatges": "Altre", "dni": "11111112H"}, {"nom": "Ell", "llinatges": "Mateix", "dni": "11111113H"}]';
}

function toJSON(objecte){
    return JSON.stringify(objecte);
}