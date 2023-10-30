function sumDigits(num) {
  let sum = 0;
  let inputAsString = num.toString();

  for (let index = 0; index < inputAsString.length; index++) {
    let currentDigit = Number(inputAsString[index]);
    sum += currentDigit;
  }

  console.log(sum);
}

sumDigits(245678);
