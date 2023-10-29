function print(start,end){
    let sum=0;
    let numberRow='';

    for (let number=start; number<=end; number++){
        sum+=number;
        numberRow+= `${number} `;
    }

    console.log(numberRow);
    console.log(`Sum: ${sum}`);
}

print(5,10);
