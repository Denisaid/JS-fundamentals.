function palindromeIntegers(array) {
  for (let index = 0; index < array.length; index++) {
    let numberAsString = array[index].toString();
    let reverstNumber = numberAsString.split("").reverse().join("");

    if (numberAsString === reverstNumber) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

console.log(palindromeIntegers([123, 323, 421, 121]));
