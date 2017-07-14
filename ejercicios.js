//Ejercicio 7: Sumatoria de los números impares comprendidos en un rango
var n = 1;
var m = 7;
function sumatoriaImpares (n,m){
  var arr = [];
  var sumatoria = 0;
  for (var i = n; i <= m; i++){
      arr.push(i);
    }
  for (var j = 0; j < arr.length; j++){
    if(arr[j]%2 !== 0){
      sumatoria = sumatoria + arr[j];
    }
  }
  return sumatoria;
  }
sumatoriaImpares (n, m);
