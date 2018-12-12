function maxim(vector) {
    var max = vector[0];
    for (var index = 1; index < vector.length; index++) {
        if (vector[index] > max) {
            max = vector[index];
        }
    }
    return max;
}

function minim(vector) {
    var min = vector[0];
    for (var index = 1; index < vector.length; index++) {
        if (vector[index] < min) {
            min = vector[index];
        }
    }
    return min;
}

function mitjana(vector) {
    var mitja = 0;
    for (var index in vector) {
        mitja += vector[index];
    }
    return mitja / vector.length;
}

function copiaArray(original) {
    var copia = [];
    for (var index = 0; index < original.length; index++) {
        copia.push(original[index]);
    }
    return copia;
}




function moda(array) {
    function posicioMaxim(vector) {
        var max = vector[0];
        var pos = 0;
        for (var index = 1; index < vector.length; index++) {
            if (vector[index] > max) {
                max = vector[index];
                pos = index;
            }
        }
        return pos;
    }
    
    
    var valors = [];
    var aparicions = [];
    for (var index = 0; index < array.length; index++) {
        if (valors.indexOf(array[index]) >= 0) {
            aparicions[valors.indexOf(array[index])]++;
        } else {
            valors.push(array[index]);
            aparicions.push(1);
        }
    }
    return valors[posicioMaxim(aparicions)];
}

function camelCase(frase) {
    frase = frase.toLowerCase();
    var paraules = frase.split(" ");
    for (var index = 1; index < paraules.length; index++) {
        paraules[index] = paraules[index].charAt(0).toUpperCase() + paraules[index].substr(1);
    }
    return paraules.join('');
}

function eliminaDuplicats(origen) {
    for (var index = 0; index < origen.length; index++) {
        while (origen.lastIndexOf(origen[index]) !== index) {
            origen.splice(origen.lastIndexOf(origen[index]), 1);
        }
    }
    return origen;
}

