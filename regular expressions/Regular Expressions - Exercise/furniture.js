function Furniture(input) {
  let pattern = />>(?<name>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;

  let totalSum = 0;

  console.log("Bought furniture:");

  for (const line of input) {
    let result = line.match(pattern);

    if (result) {
      let items = result.groups.name;
      let price = +result.groups.price;
      let count = +result.groups.quantity;

      totalSum += price * count;
      console.log(items);
    }
  }

  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

Furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
);
