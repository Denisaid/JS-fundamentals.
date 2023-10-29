function routing(number, precision){
if (precision>15){
    precision=15;
}

let result=parseFloat(number.toFixed(precision));
console.log(result);

}

routing(3.1415926535897932384626433832795,2);