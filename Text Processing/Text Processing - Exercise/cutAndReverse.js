function cutAndReverse(input) {
  let fisrtHalf = input
    .split("")
    .slice(0, input.length / 2)
    .reverse()
    .join("");

  let secondHalf = input
    .split("")
    .slice(input.length / 2)
    .reverse()
    .join("");

  console.log(fisrtHalf);
  console.log(secondHalf);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
