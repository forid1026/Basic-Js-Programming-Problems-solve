/*   var i = 1, factorial = 1;
  while( i <= 5){
      factorial *= i;
      i++;
  }
  console.log(factorial);  */

  function factorial(num){
      var i = 1, factorial = 1;
      while( i <= num)
      {
          factorial *= i;
          i++;
      }
      return factorial;
  }
  
  var result = factorial(5);
  console.log(result);