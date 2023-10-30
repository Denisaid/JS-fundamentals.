function gladiator(lostFight,helmetPrice,swordPrice,shieldPrice,armodPrice){

    let total=0;
for (let fight=1; fight<=lostFight; fight++){

    if (fight%2===0){
        total+=helmetPrice;
    }
    if (fight%3===0){
        total+=swordPrice;
    }
    if (fight%6===0){
        total+=shieldPrice;
    }
    if (fight%12===0){
        total+=armodPrice;
    }
}
console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

gladiator(7,2,3,4,5)