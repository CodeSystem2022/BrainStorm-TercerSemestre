let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minúsculas a mayúsculas 
    },
    set lang(lang){
        this.idioma = lang.toUpperCase(); 
    },
    nombreCompleto: function(){ //Método o función en JavaScript
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){
        return 'El nombre es: ' + this.nombre+' y la edad es: '+this.edad +' años';
    }
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono =  '+5492604010323';
console.log(persona2.telefono);
console.log('creamos un nuevo objeto')
console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in')
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad]);
}
console.log('cambiamos y eliminamos un error')
persona.apellida = 'Betancud' //Cambiamos dinámicamente un valor del objeto
delete persona.apellida; //Elimina el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Numero 1: La más sencilla: concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto: Forma 1');
console.log(persona.nombre+', '+persona.apellido);

//Número 2: A través del ciclo for in
console.log('Distintas formas de imprimir un objeto: Forma 2 (ciclo for in)');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número 3: La función Object.values()
console.log('Distintas formas de imprimir un objeto: Forma 3 (Onject.values())');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4:Utilizaremos el método JSON.stringify

console.log('Distintas formas de imprimir un objeto: Forma 4 (JSON.stringify)')
let personaString = JSON.stringify(persona);
console.log(personaString);
console.log('comenzamos a utilizar el método get');
console.log(persona.nombreEdad);
console.log('Comenzamos con el método get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre = 'Luis', apellido, email){ //constructor (se puede hacer una preasignación)
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}

let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com'); 
padre.nombre = 'Luis'; // se puede modificar el nombre
padre.telefono = '+5492604768956'; // Una propiedad exclusica del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //Utilizamos la función
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono) //la propiedad no esta definida 
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos

//caso objeto 1
let miObjeto = new Object(); //Esta es una opción formal
//caso objeto 2
let miObjeto2 = {}; //Esta opción es breve y recomendada

//caso String 1
let miCadena1 = new String('Hola'); //Sintaxis formal
//caso String 2
let miCadena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada

//caso con número 1
let miNumero = new Number(1); // Es formal no recomendable
//caso con nímeros 2
let miNumero2 = 1; //Sintaxis recomendada

//caso boolean 1
let miBoolean = new Boolean(false); //Formal
//caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//caso arreglos 1
let miArreglo = new Array(); //Formal
//caso arreglo 2
let miArreglo2 =[]; //Sintaxis recomendada

//caso function 1
let miFuncion1 = new function(){}; //Todo despúes de new es considerado objeto
//caso fuction 2
let miFuncion2 = function(){}; //Notación simplificada

//Uso de prototype
Persona3.prototype.telefono = '2604783948';
console.log(padre);
console.log(madre.telefono) //nos muestra el que pusimos recientemente
madre.telefono= '+5492604783948'
console.log(madre.telefono)

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido:'Perez',
    nombreCompleto2: function(titulo,telefono){
        return titulo+ ': '+this.nombre+' '+this.apellido+' '+telefono;
       // return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

console.log(persona4.nombreCompleto2('lic.','+5492604892389'));
console.log(persona4.nombreCompleto2.call(persona5,'Ing.','+542604782940'));

//Método Apply
let arreglo =['Ing.', '+5492604782374']
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
