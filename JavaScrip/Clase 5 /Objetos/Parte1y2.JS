Let x =10; //Variable de tipo primitiva
console.log(x.length);

//Objetos
Let persona = {
nombre: "Carlos",
apellido: "Gil",
email: "cgil@gmail.com",
edad: 28
idioma: "es"
get lang(){
    return this.idioma.toUpperCase(); //Convierte las minusculas a mayusculas
    },
    set lang(Lang){
        this.idioma = lang.toUpperCase();
    },
nombreCompleto: function(){ //metodo o funcion de JavaScript
     return this.nombre+" "+this.apellido; 
    },
     get nombreEdad(){ //Este es el metodo get
        return "El nombre es: "+this.nombre+", Edad: "+this.edad
    }

}

console.log(persona.nombre); 
console.log(persona.apellido); 
console.log(persona.email);
console.log(persona.edad); 3
console.log(persona);  
console.log(persona.nombreCompleto()) 
console.log("Ejecutando con un objeto");
Let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = "Juan";
persona2.direccion = "Salada 14";
persona2.telefono = "5492618282821";
console.log(persona2.telefono); 
console.log("Creamos un nuevo objeto");
console.log(persona["apellido"]); // Accedemos como si fuera un arreglo 
console.log("Usamos el ciclo for in")
//for in y accedemos al objeto como si fuera un arreglo
for (propiedad in persona){
console.log(propiedad); 
console.log(persona[propiedad]); ç
}
console.log("cambiamos y eliminamos un error");
persona.apellido = "Bentacud";// Cambiamos dinamicamente un valor del objeto
delete persona.apellido; //Eliminamos el error
console.log(persona);

// Distintas formas de imprimir un objeto
// Numero 1: la mas sencilla: concatenar cada valor de cada propiedad
console.log("Distintas formas de imprimir un objeto: forma 1");
console.log(persona.nombre+" "+persona.apellido);

// Numero 2: A travez del ciclo for in
console.log("Distintas formas de imprimir un objeto: forma 2");
for(nombrePropiedad in persona){
console.log(persona[nombrePropiedad]);
}
// Numeero 3: La funcion Objetc.values()
console.log("Distintas formas de imprimir un objeto: forma 3");
Let personaArray = Object.values(persona);
console.log(personaArray);

// Numero 4: Utilizamos el metodo JSON.stringify
console.log("Distintas formas de imprimir un objeto: forma 4");
Let personaString = JSON.stringify(persona);
console.log(personaString);

console.log("Comenzamos a ver el Método get");
console.log(persona.nombreEdad);

console.log("Comenzamos con el metodo set y get para idiomas"); 
persona.lang = "en";
console.log(persona.lang);

function Persona3(nombre = "Luis", apellido,email)[ //Constructor
this.nombre = nombre;
this.apellido = apellido;
this.email = email;
this.nombreCompleto = function(){
    return this.nombre+" "+this.apellido;  
}
]
Let padre = new Persona3("Leo", "Lopez","lopez1@gmail.com");
padre.madre = "Luis"; // Modificamos el nombre
padre.telefono = "5492618282821"; // una propiedad exclusiva del objeto padre 
console.log(padre);
console.log(nombreCompleto()); // Utilizamos la funcion 
Let madre = new Persona3("Laura", "Contrera", "contrera1@gmail.com");
console.log(madre);
console.log(madre.telefono); // la propiedad no esta definida 
console.log(madre.nombreCompleto());

// Diferentes formar de crear objetos

// Caso objeto 1
Let miObjeto = new Objeto(); //Esta es una opcion formal
// Caso obejeto 2
Let miObjeto = {}; //Esta opcion es breve y recomendada 

// Caso String 1
Let miCadena1 = new String("Hola"); //Sintaxis formal
// Caso String 2
Let miCadena2 = "Hola"; //Esta es la sintaxis sinplificada y recomendada

// Caso con numeros 1
Let miNumero = new Number(1); //Es formal no recomendable
// Caso con numero 2
Let miNumero2 = 1, // Sintaxis recomendada

// Caso Boolean 1
Let miBoolean1 = new Boolean(false); // Formal
// Caso Boolean 2
Let miBoolean2 = false; // Sintaxis recomendada

//Caso Arreglos 1
Let miArreglos1 = new Array(); // Formal
//Caso Arreglos 2
Let miArreglos2 = []; // Sintaxis recomendada

// Caso Funcion 1
Let miFuncion1 = new function ()[]; // Todo despues de nwe es considerado objeto
// Caso Funcion 2
Let miFuncion2 = function()[]; // Notacion simplificada y recomendada

 // Uso de Prototype
 Persona3.prototype.telefono = 2618383832
 console.log(padre);
 console.log(madre.telefono);
 madre.telefono = "5492618383832";
 console.log(madre.telefono);

 // Uso de Call
 Let persona4 = {
nombre = " Juan";
apellido = "Perez";
nombreCompleto : function(){
  return titulo+":"this.nombre+" "+this.apellido+" "telefono;
 // return this.nombre+" "+this.apellido;
  }
}

Let persona5 = {
    nombre: "Carlos";
    apellido: "Lara";
} 

console.log(persona4.nombreCompleto2("Lic." ,"5492618383836"));
console.log(persona4.nombreCompleto2.call(persona5, "Ing","5492618585856"));

// Metodo Apply
Let arreglo = ["Ing.", "5492618686865"];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
