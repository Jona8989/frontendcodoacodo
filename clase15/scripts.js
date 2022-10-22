let edad = 0;
edad = edad + 1;


let otraEdad = edad++;
let edad2 = ++edad;

let altura = 175;
altura--;
--altura;

function incrementar() {
    const labelContador = document.getElementById('contador');
    let valorDelLabelContador = parseInt(labelContador.innerHTML);
    //valorDelLabelContador = parseInt(valorDelLabelContador);
    valorDelLabelContador++;
    labelContador.innerHTML = valorDelLabelContador;
}

function decrementar() {
    const labelContador = document.getElementById('contador');
    let valorDelLabelContador = parseInt(labelContador.innerHTML);
    //valorDelLabelContador = parseInt(valorDelLabelContador);
    valorDelLabelContador--;
    labelContador.innerHTML = valorDelLabelContador;

}