//Ejercicio 1

//Ejercicio 2

//Ejercicio 3

//Ejercicio 4

//Ejercicio 5

//Ejercicio 6: Cuenta cuantas vocales tiene un array de palabras
function cuentaVocales(array){
  array=array.join("").split("");
  var vocales="aeiouáéíóú";
  var cuenta = 0;
  for( var i in vocales){
    for( var j in array){
      if(vocales[i]==array[j].toLowerCase()){
        cuenta++;
      }
    }
  }
  return cuenta;
}
