function addAndSubtract(input) {
  let sumOldArray = 0;
  let sumNewArray = 0;
  let arrayLength = input.length;
  for (let index = 0; index < arrayLength; index++) {
    let cuurentNumber = Number(input[index]);

    sumOldArray += cuurentNumber;

    if (cuurentNumber % 2 == 0) {
      cuurentNumber += index;
    } else {
      cuurentNumber -= index;
    }

    input[index] = cuurentNumber;
    sumNewArray+=cuurentNumber;
  }

  console.log(input);
  console.log(sumOldArray);
  console.log(sumNewArray);

}

addAndSubtract([5, 15, 23, 56, 35]);
