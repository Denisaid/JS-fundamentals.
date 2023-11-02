function factoriel(firstNumber, secondNumber){

    function facto(number){
        if (number===0){
            return 1;
        } else {
            return number*facto(number-1);
        }
    }

    let fisrtNumberFactoriel=facto(firstNumber);
    let secondNumberFactoriel=facto(secondNumber);
    let result = fisrtNumberFactoriel/secondNumberFactoriel;
    console.log((result.toFixed(2)));
}


factoriel(5,2)