function maxNumber(arr) {
  let result = "";
  let arrLength = arr.length;

  for (let index = 1; index <= arrLength; index++) {
    let isMax = true;

    let cuurentNumber = Number(arr[index - 1]);

    for (let j = index; j < arr.length; j++) {
      let nextNumber = Number(arr[j]);

      if (nextNumber >= cuurentNumber) {
        isMax = false;
        break;
      }
    }

    if (isMax) {
      result += `${cuurentNumber} `;
    }
  }

  console.log(result);
}

maxNumber([1, 4, 3, 2]);
