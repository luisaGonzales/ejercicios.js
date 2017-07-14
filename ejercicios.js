//Ejercicio 1

function capicua(num){
  var num1=  num.toString();//5,6,5
  var numero=[];
  var numero_reves=[];

  for (var i=0;i<num1.length;i++){
    numero.push(num1[i]);
}
console.log(numero);
 for ( var i=numero.length-1;i>=0;i--){
  numero_reves.push(numero[i]);
 }
 console.log(numero_reves);

for (var i=0;i<numero.length;i++){
  if (numero[i]==numero_reves[i]){
    console.log("numero capicua");
  }
  else{
    console.log("no es numero capicua");
  }
  }
 }
//capicua(12321);

//Ejercicio 2

//Ejercicio 3
function contarCaracter(palabra){
  var arr = [];
  var contarLetra='a';
  var contador= 0;
  for(var i = 0; i<palabra.length; i++){
    for(var j=0; j<palabra[i].length; j++){
      if(palabra[i][j]==contarLetra){
      contador ++;
    }
    }
  } 
  console.log(contador);
  console.log(arr);
}
console.log(contarCaracter(['casa', 'mamamia']));

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
