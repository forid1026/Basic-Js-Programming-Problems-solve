function checkPrime(n){
    for(var i = 2; i < n; i++){
        if(n % i == 0){
            return 'its not a prime number';
        }
    }
    return 'Its a prime number';
}
var result = checkPrime(12);
console.log(result);