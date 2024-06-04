console.log("Hola Mundo");

const dato1 = "Hola Mundo"; /*Declaracion de variables constantes datos que no se pueden cambiar*/

let datoDado = 1;
datoDado = 2;

function prueba1(){
    dato3=[{nombre:"Juan"}]
}

// LAS VARIABLES DE FLECHA PUEDEN SER ANONIMAS
()=>{   

}

(()=>{
    console.log("Funcion de flecha")
})()

const suma = (num1, num2) => (num1 + num2)
suma()
console.log(suma(1,2))

/* Var se puede modificar es todos los aspectos (scops) y let dentro de a clase o archivo donde fue creada */

var persona = {
    nombre:"Isain",
    apellido:"Jimenz",
    sexo:"M"
}

/* Agregar campo al json */
var{nombre} = persona

persona.estatura=1.85
persona={...persona, estatura:1.85}




console.log(persona)

persona.estatura=1.85
persona={persona, estatura:1.85}

console.log(persona)


/* Recirrer arreglos */

persona = [{num:1},{num:2},{num:3},{num:4}, {num:5}]

persona.map((objeto, index) =>{
    console.log(`el numero es de objeto es: ${objeto.num} en la posicion: ${index}`)
}) 

/*persona.map(({num}, index) =>{
    console.log(`el numero es de objeto es: ${num} en la posicion: ${index}`)
})*/


const mascotas = [
    { raza: "Labrador", color: "Dorado" },
    { raza: "Siamés", color: "Blanco" },
    { raza: "Pastor Alemán", color: "Negro y Marrón" },
    { raza: "Persa", color: "Gris" },
    { raza: "Bulldog Francés", color: "Atigrado" }
  ];
  
  mascotas.map(({ raza, color }, index) => {
    console.log(`La mascota es de raza ${raza} y color ${color}`);
  });