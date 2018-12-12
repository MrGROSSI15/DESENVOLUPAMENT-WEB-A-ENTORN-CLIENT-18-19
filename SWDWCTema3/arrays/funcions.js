var notes = [];

function afegir() {
    var nota = document.getElementById("notes").value;
    notes.push(nota);
    var notes1 = "";
    for (var recorr = 0; recorr < notes.length; recorr++) {
        notes1 = notes[recorr] + ",";
    }
    document.getElementById("notesAfegides").innerHTML += notes1;
}

function maxim(nums) {
    notes.sort(function (a, b) {
        return b - a
    });
    return notes[0];

}

function minim(nums) {
    notes.sort(function (a, b) {
        return a - b
    });
    return notes[0];
}

function mitja(nums) {
    var mitjana = 0;
    var sumaNotes = 0;
    var numNotes = notes.length;
    for (var m = 0; m < notes.length; m++) {
        sumaNotes += parseInt(notes[m]);
    }
    mitjana = sumaNotes / numNotes;
    return mitjana;
}

function clonaArray(array) {
    // var copia = [];
    var copia = array.slice(0);
    return copia;
}

function moda(array) {
    var valor = [];
    var repeticions = [];
}