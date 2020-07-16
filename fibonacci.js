/* var fibo = [0, 1]
for(var i = 2; i <= 10; i++){
   fibo[i] =fibo[i-1] + fibo[i-2];
}
console.log(fibo); */

 function fibonacci(num){
   var fibo = [0, 1];
   for(var i = 2; i <= num; i++){
      fibo[i] = fibo[i-1] + fibo[i-2];
   }
   return fibo;

}
var result = fibonacci(10);
console.log(result);


