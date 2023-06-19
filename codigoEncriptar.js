//console.log("comencemos");


/* Entradas y Botones */


let input = document.getElementById("textoaEncriptar");
let inputSalida = document.getElementById("textoaDesencriptar");

let buttonEncrip = document.getElementById("buttonEncriptar");
let buttonDesencrip = document.getElementById("buttonDesencriptar");
let buttonCopiar = document.getElementById("buttonCopiar");
let munecoA = document.getElementById("muneco");


buttonEncrip.onclick = encriptar;
buttonDesencrip.onclick = desencriptar;
buttonCopiar.onclick = copiar;

// Declaracion de variables
let inputTexto;
let deletreo;
let encriptado = [];
let desencriptado = [];
let longitudTexto;
let letras = ["a", "e", "i", "o", "u"];
let letrasEncriptadas = ["ai", "enter", "imes", "ober", "ufat"];
let textoencriptado;
let textoDesencriptado;
let escribir;
let copiado;

/* muestra muñeco y borra texto */
munecoA.style.display = "block";
mensaje1.style.display = "block";
mensaje2.style.display = "block";
inputSalida.style.display = "none";
buttonCopiar.style.display = "none";


/* Funciones */

function copiar() {
    inputSalida.select();
    copiado = inputSalida.value;
    navigator.clipboard.writeText(copiado)
        .then(() => {
            // console.log('Texto copiado al portapapeles')
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
        })

    navigator.clipboard.readText()
        .then(inputSalida => {
            // input.value= inputSalida;
            // console.log('Texto del portapapeles:', inputSalida)
        }
        )
}

function borrarMuneco() {
    munecoA.style.display = "none";
    mensaje1.style.display = "none";
    mensaje2.style.display = "none";
    inputSalida.style.display = "block";
    buttonCopiar.style.display = "block";
}

function desencriptar() {
    borrarMuneco();
    escribir = document.getElementById('textoaDesencriptar'); //escribe el texto en el textarea

    console.log("ingrese")
    inputTexto = input.value;
    deletreo = "";
    deletreo = inputTexto.split('') // Dividiendo la cadena "mensaje" usando el carácter espacio
    longitudTexto = deletreo.length;
    desencriptado = [];
    console.log(inputTexto);
    for (i = 0; i < longitudTexto; i++) {

        if (deletreo[i] == letras[0]) {
            desencriptado[i] = letras[0];
            console.log("entro a la a");
            i = i + 1;

        }
        else if (deletreo[i] == letras[1]) {
            desencriptado[i] = letras[1];
            console.log("entro a la e");
            i = i + 4;

        }
        else if (deletreo[i] == letras[2]) {
            desencriptado[i] = letras[2];
            console.log("entro a la i");
            i = i + 3;

        }
        else if (deletreo[i] == letras[3]) {
            desencriptado[i] = letras[3];
            console.log("entro a la o");
            i = i + 3;

        }
        else if (deletreo[i] == letras[4]) {
            desencriptado[i] = letras[4];
            console.log("entro a la u");
            i = i + 3;

        }
        else {
            desencriptado[i] = deletreo[i]

        }
        console.log(desencriptado);
        textoDesencriptado = desencriptado.join(""); //convierte el array en texto
        escribir.textContent = textoDesencriptado; //escribe el texto en el textarea
        console.log(textoDesencriptado);

    }
}


function encriptar() {


    /* muestra texto y borra muñeco */
    borrarMuneco();

    /*  */

    inputTexto = input.value;
    deletreo = inputTexto.split('') // Dividiendo la cadena "mensaje" usando el carácter espacio
    longitudTexto = deletreo.length;
    encriptado = [];

    console.log(inputTexto);
    for (i = 0; i < longitudTexto; i++) {

        if (deletreo[i] == letras[0]) {
            encriptado[i] = letrasEncriptadas[0];
            console.log("entro a la a");

        }
        else if (deletreo[i] == letras[1]) {
            encriptado[i] = letrasEncriptadas[1];
            console.log("entro a la e");

        }
        else if (deletreo[i] == letras[2]) {
            encriptado[i] = letrasEncriptadas[2];
            console.log("entro a la i");

        }
        else if (deletreo[i] == letras[3]) {
            encriptado[i] = letrasEncriptadas[3];
            console.log("entro a la o");

        }
        else if (deletreo[i] == letras[4]) {
            encriptado[i] = letrasEncriptadas[4];
            console.log("entro a la u");

        }
        else {
            encriptado[i] = deletreo[i]

        }

    }

    console.log(encriptado);
    textoencriptado = encriptado.join(""); //convierte el array en texto
    document.getElementById('textoaDesencriptar').textContent = textoencriptado; //escribe el texto en el textarea
    console.log(textoencriptado);
    input.value = "";
    // copiado=textoencriptado;
}

