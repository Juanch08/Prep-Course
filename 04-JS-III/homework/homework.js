// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
 return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let sumaDor = 0

  for (let i = 0;  0 < array.length;  i++){

    sumaDor = sumaDor + array[i];

  }

 return sumaDor;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 array.includes(elemento);
 return array.length;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  numeros [10, 40, 90, 82];
  let contadorSuma = 0
  for (let valueResult of numeros){
    contadorSuma += valueResult;

} return contadorSuma;
  }

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
 let suma = 0

 for (let i = 0;  i < resultadosTest.length;  i++){

 suma = suma + resultadosTest[i];

 }
 let promedio = suma / resultadosTest.length;
 return promedio;

 }



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
 numeros = [10, 70, 100, 509];
 let max = Math.max(... numeros);
 return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
 let multipliCacion = 1
 if (arguments.length < 1) return 0;

 for (let i = 0;  i < arguments.length;  i++){

  multipliCacion = multipliCacion * arguments[i];

 }
return multipliCacion;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  for (arreglo;  arreglo.length > [18];  i++){
    return arreglo;
  }
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
 
 numeroDeDia = [
["Error"," los dias disponibles son del 1 al 7"],

["Lunes", " Es día laboral"],
["Martes", " Es día laboral"],
["Miércoles", " Es día laboral"],
["Jueves", " Es día laboral"],
["Viernes", " Es día laboral"],

["Sábado", " Es fin de semana"],
["Domingo", " Es fin de semana"]


]
alert (numeroDeDia[//El día que el usuario elija])
])

}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n.toString()[0] === 9){
    return true;
  
  } else {

    return false;
  } 
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  arreglo = [];
  let igualesTodos = arreglo
  for (let i = 0;  i < arreglo.length;  i++){
    if (arreglo[i] !== igualesTodos)
  } return false; {
   
   } else {

  return true; }
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  array = ["enero", "marzo", "noviembre"];
  let arrayNew = [];
  
  for (arrayNew;  array.length > 0;  i++){

    if (arrayNew === array){

      arrayNew.push(array)

      return arrayNew;

    } else {

      return "No se encontraron los meses pedidos"
    }
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  array = [10, 50, 90, 100, 110, 160, 190, 200];
  let newArrayMayorA100 = [];
  
  for (let i = 0;  i < array.length;  i++){

    let numberMayor = array[i];
    if (numberMayor > 100){

      newArrayMayorA100.push(numberMayor)
      return newArrayMayorA100;
  }
}
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
let result = [];
 numero = 0 

for (let i = 0;  i < 10;  i++){

  numero = numero + 2;
  result.push(numero)
  
  if (i === result){
  
  return "Se interrumpió la ejecución"

  break;
  
  } else {

   return result;
  }
  

}

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
let valUE = [];
numero = 0;

for (let i = 0;  i < 10;  i++){

 numero = numero + 2;
 
 if (i === 5) continue;

 else {

 valUE.push(numero)

return numero;
}

}
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
