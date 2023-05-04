miFuncion(8, 2);//Esto se lo conoce como hosting

function miFuncion(a, b){
   console.log(arguments);
}

//Llamamos a la función
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una función de tipo expresión
let x = function(a, b){return a + b};//Nesecita cierre con punto y coma
resultado = x(5, 6);//al llamar se pone la variable y parentesis
console.log(resultado);


//Funciones de tipo self y invoking
(function(a, b){
    console.log('Ejecutando la cunción: '+(a, b));

})(9, 6);


console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}

miFuncionDos(5, 7, 3, 6);

//toString
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Funciones Flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); //Asignamos el valor a una varibale
console.log(resultado);

//Función tipo expresión
let sumar = function(a = 4, b =8){
   console.log(arguments[0]);//Muestra el parámetro de: a
   console.log(arguments[1]);//Muestra el prámetro de:b 
   console.log(arguments[2]);
   return a + b;
}
resultado = sumar(3, 2, 9);
console.log(resultado);

//Sumar todos los argumentos
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i(++)){
        suma += arguments[i]; //arguments es para arreglos
    }
    return suma;
}

//Tipos primitivos
let x = 10;
function cambiarValor(a){//Paso por valor
    a = 20;
}
cambiarValor(k);
console.log(k);

//Paso por referencia
const persona ={
    nombre: 'Juan',
    apellido: 'Lopez'
}
console.log(persona);
function cambiarVariableObjeto(p1){
    p1.nombre ='Ignacio';
    p1.apellido ='Perez';
}

cambiarVariableObjeto(persona);
console.log(persona);
