function suma(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}
//document.write("La suma es: "+ suma(num1, num2));

function resta(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

function multi(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function div(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

function md(num1, num2) {
    return num1 % num2;
}

function esSencer(num) {
    if (isNaN(num)) {
        alert(num + " no es un número.");
    } else {
        if (num % 1 == 0) {
            return true;
        } else {
            return false;
        }
    }
}

function validar(num) {
    do {
        prompt("Introduiex un numero vàlid: ");
    } while (!esSencer(num));

}
function validacio(cad) {
    do {
        var num = prompt(cad);
    } while (!esSencer(num));
    return num;
}

function validarTelf(telf) {
    if (telf.length == 9 && (telf.charAt(0) == 6 || telf.charAt(0) == 7)) {
        alert("El numero es correcte");
    } else if (telf.length == 9 && telf.charAt(0) == 9) {
        alert("Es un num FIXE")

    } else {
        alert("El numero No es correcte");
    }

}

function validarData(data) {
    var tipus = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((data.match(tipus)) && (data!='')) {
          return "La data es correcta";
    } else {
          return "La data es incorrecta";
    }
}

function validarNif(dni) {
    var numero,
        let, lletra;
    var expNif = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if (expNif.test(dni) === true) {
        numero = dni.substr(0, dni.length - 1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        lletra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        lletra = lletra.substring(numero, numero + 1);
        if (lletra !=
            let) {

            return false;
        } else {

            return true;
        }
    } else {

        return false;
    }
}

function validarObligatori(valor){
    if (valor === ''){
        alert("Es buit");
    }else{
        alert(valor);
    }
}


// function validarTlf(telf) {

//     if (telf.length == 9 && (telf.charAt(0) == 6 ||  telf.charAt(0) == 7)) {
//         alert("HAS INTRODUIT UN NUMERO CORRECTE");
//     } else {
//         alert("EL NUMERO NO ES UN NUMERO DE TELEFON");

//     }
// }